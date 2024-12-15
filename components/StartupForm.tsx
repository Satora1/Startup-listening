"use client"
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'
import MDEditor from "@uiw/react-md-editor";
import { Button } from './ui/button';
const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [pitch,setPtch]=useState()
    return (
        <form action={() => { }} className='startup-form'>
            <div>
                <label htmlFor="title" className='startup-form_label'>Title</label>
                <Input id="title" name='title' className='startup-form_input' required placeholder='Startup Title' />
                {errors.title && <p className='startup-form_error'>{errors.title}</p>}
            </div>

            <div>
                <label htmlFor="description" className='startup-form_label'>Description</label>
                <Textarea id="description" name='description' className='startup-form_textarea' required placeholder='Startup Description' />
                {errors.description && <p className='startup-form_error'>{errors.description}</p>}
            </div>
            <div>
                <label htmlFor="link" className='startup-form_label'>Image URL</label>
                <Input id="link" name='link' className='startup-form_input' required placeholder='Startup image URL' />
                {errors.link && <p className='startup-form_error'>{errors.link}</p>}
            </div>

            <div data-color-mode="light">
                <label htmlFor="pitch" className='startup-form_label'>Title</label>
               <MDEditor
               value={pitch}
               onChange={(value)=>setPtch(value as string) }
               id="pitch"
               previev="edit"
               height={300}
               style={{borderRadius:20,overflow:"hidden"}}
               textareaProps={{
                placeholder:
                "Briefly describe your idea and what problem it resolve"
               }}
               previweOptions={{
                disallowedElements:["style"],
               }}
               />
                {errors.pitch && <p className='startup-form_error'>{errors.pitch}</p>}
            </div>
            <Button type="submit" className="startup-form_btn">
            </Button>
        </form>
    )
}

export default StartupForm