"use server"
import { resend } from "./resend"

export async function sendMail(formdata: FormData) {

    const name = formdata.get("first-name") + " " + formdata.get("last-name")
    const email = formdata.get("email")
    const phone = formdata.get("phone")
    const service = formdata.get("service")
    const message = formdata.get("message")

    try {
        await resend.emails.send({
            from: `${name} <onboarding@resend.dev>`,
            to: 'mohamedbash19574@gmail.com',
            subject: 'New contact from submission',
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        })

        return { success: true }
    } catch (e) {
        console.error(e)
        return { success: false, error: 'failed to send email' }
    }
}