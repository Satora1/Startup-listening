import React from 'react'
import { StringDiffSegment } from 'sanity'

const page = async ({ params }: { params: Promise<{ id: StringDiffSegment }> }) => {
    const id = (await params).id
    return (
        <>
            <h1 className='text-3xl '>
                this is startup number:{id}
            </h1>
        </>
    )
}

export default page