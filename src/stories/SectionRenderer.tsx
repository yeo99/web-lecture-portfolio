import React, { useRef, useState, useEffect, forwardRef } from 'react'

import useIntersectionObserver from './hooks/UseIntersectionObserver'
import WorkCard from './WorkCard'
import SkillCard from './SkillCard'
import data from '../../data/portfolio.json'


interface SectionProps {

    children?: React.ReactNode; 
    type: string;
}

type RefType = HTMLDivElement | null;

//https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref
// forwardRef는 위 주소에 따르면 type을 만들어서 넘기거나, 아니면 그대로 HTMLDivElement를 아래 그대로 써준다.

// 위 인터페이스와 type의 차이는? 왜 인터페이스에는 안되지?? 그냥 문법상, 위 인터페이스 두개를 묶을 수 없어서 인거같기도 ㅎ ㅏ고. 이건 좀 더 알아봐야 할듯



interface WorkObjectProps {
    id: string;
    title: string;
    description: string;
    imageKey: string;
    url: string;
    stack: string;
    work1?: string;
    work2?: string;
    work3?: string;
    work4?: string;
    work5?: string;
    work6?: string;
    [key: string]: string | undefined;


}


const SectionRenderer = forwardRef<RefType, SectionProps>(({ type = 'work' }, ref) => {
    const [componentDidRender, tick] = useState(true)
    useEffect(() => {
        setTimeout(() => tick(false), 500)
    }, [])
    

    const entry = useIntersectionObserver(ref, {})
    const isVisible = !!entry?.isIntersecting
    return (
        <div className='mt-5 laptop:mt-10 ' ref={ref}>
            <div
                style={{
                    position: "relative",
                    opacity: !componentDidRender || isVisible ? 1 : 0.2,
                    transition: "opacity 0.6s ease-in-out, bottom 0.6s ease-in-out",
                    transitionDelay: "0.1s",
                    bottom: !componentDidRender || isVisible ? "0px" : "100px",
                }}
                // style={{
                //     position: "relative",
                //     opacity: entry?.isIntersecting ? 1 : 0.2,
                //     transition: "opacity 0.6s ease-in-out, bottom 0.6s ease-in-out",
                //     transitionDelay: "0.1s",
                //     bottom: entry?.isIntersecting ? "0px" : "100px",
                // }}
               
            >

                {{

                    skill: (
                        <div>
                            {data.skills.map((skill, index) => (
                                <SkillCard
                                    key={index}
                                    name={skill.title}
                                    description={skill.description}
                                    period={skill.period}
                                />
                            ))}
                        </div>
                    ),
                    work: (
                        <div className='grid grid-cols-1 tablet:grid-cols-2 gap-4 opacity-1'>
                            {data.projects.map((project) => {
                                const workArr = values(project)
                                return (

                                    <WorkCard
                                        key={project.id}
                                        img={project.imageKey}
                                        name={project.title}
                                        description={project.description}
                                        workArr={workArr}
                                        stack={project.stack}
                                        onClick={() => {
                                            (project.url === 'not available') ? alert('not available') : window.open(project.url)

                                        }}
                                    />
                                )
                            }
                            )}
                        </div>
                    )
                }[type]}

            </div>
        </div>
    )
})

function values(project: WorkObjectProps) {
    const filteredArr = Object.keys(project).filter((item) => item.includes('work'))
    return filteredArr.map((item, index) => (project[item]))
}

const Component = forwardRef<RefType, SectionProps>(({type= 'work'}, ref) => {

    return (
        <>

            <SectionRenderer ref={ref} type={type} />

        </>
    )
})

export default SectionRenderer;