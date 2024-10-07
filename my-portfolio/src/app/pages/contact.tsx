import React from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
function Contact() {
  return (
    <section className="container mx-auto pb-12 px-8">
      <div className="grid sm:grid-cols-1 grid-cols-2 gap-8 items-center">
        <div className="relative h-[400px] md:h-full">
          {/* <Image
            src=""
            alt="Contact visual"
            width={200}
            height={200}
            className="rounded-lg object-cover w-full h-full"
          /> */}
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-gray-500 dark:text-gray-400">
              I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Your email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message"
                required
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact