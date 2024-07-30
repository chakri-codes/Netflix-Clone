// pages/api/send-email.ts
'use server'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import ChakriVerificationEmails from '@/emails/email';
const resend = new Resend("re_HXoBdtXa_At2FNAGDyUkWutZ3Spx5Aqzr");

export  async function POST() {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'chakri.k@pryzmatech.com',
      subject: 'hello world',
      react: ChakriVerificationEmails({url:'http://localhost:3000/signin'}),
    });

    // if (error) {
    //   return Response.json({ error }, { status: 500 });
    // }
    console.log('sended success')

    return NextResponse.json({status:'ok'})
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}