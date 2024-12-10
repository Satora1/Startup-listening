"use client"
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'

const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({})
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
                <label htmlFor="category" className='startup-form_label'>Category</label>
                <Input id="category" name='category' className='startup-form_input' required placeholder='Startup Category' />
                {errors.category && <p className='startup-form_error'>{errors.category}</p>}
            </div>

            <div>
                <label htmlFor="title" className='startup-form_label'>Title</label>
                <Input id="title" name='title' className='startup-form_input' required placeholder='Startup Title' />
                {errors.title && <p className='startup-form_error'>{errors.title}</p>}
            </div>
        </form>
    )
}

export default StartupForm