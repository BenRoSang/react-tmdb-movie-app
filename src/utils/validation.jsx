import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a vaild email address'),
    subject: z.string().min(5, 'Subject is too short'),
    message: z.string().min(10, 'Message must be at least 10 characters')

})