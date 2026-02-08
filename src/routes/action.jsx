import emailjs from '@emailjs/browser';
import { contactSchema } from '../utils/validation';


export const contactAction = async({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    //1. Validate with Zod
    const result = contactSchema.safeParse(data);

    if(!result.success) return { errors: result.error.flatten().fieldErrors};

    //2. Send Real Email via EmailJS
    try {
        await emailjs.send(
            import.meta.env.VITE_EMAILJS_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_name: data.name,
                from_email: data.email,
                subject: data.subject,
                message: data.message
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        return { success: true}
    }catch (error) {
        console.error('Email Error', error)
        return { errors: { form: 'Failed to send email. Please try again later.'}}
    }

}