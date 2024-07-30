import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Text,
    Section,
    Button,
    Hr,
    Tailwind,
  } from "@react-email/components";
  import * as React from 'react';
  1
  const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";
  type Param={
    email:string
  }
  export function ChakriVerificationEmails (props:any)  {
    const {url} = props
    console.log(url,'url')
    return(

    <Html>
      <Head />
      <Tailwind>

      <Preview>Help us verify your email address for your CHAKRI account</Preview>
      <Body style={main}>
        <Container style={container} className="bg-stone-50 rounded-sm p-7">
          <Img
            src={`${baseUrl}/logo.png`}
            width="200"
            height="200"
            alt="CHAKRI"
            className="flex justify-start mr-auto -ml-20"
            style={logo}
          />
          <Heading style={h1} className="-mt-14">Help us verify your email address</Heading>
          <Text style={text}>
            Verify your email address to help keep your account more secure and up-to-date.
          </Text>
          <Button  style={button} href="https://chakri.com/verify" >
            Verify email
          </Button>
          <Text style={footerText}>This link will expire in 48 hours.</Text>
          <Text style={text}>
            Didn't create a CHAKRI account?
          </Text>
          <Link href="https://chakri.com/help" style={link}>
            Let us know.
          </Link>
          <Text style={text}>The CHAKRI team</Text>
          <Hr style={hr} />
          <Text style={footerText}>
            Questions? Call 000-800-919-1694
          </Text>
          <Text style={footerText}>
            CHAKRI Entertainment Services India LLP
          </Text>
          <Section>
            <Link href="https://chakri.com/settings" style={smallLink}>Notification Settings</Link>
            {' | '}
            <Link href="https://chakri.com/terms" style={smallLink}>Terms of Use</Link>
            {' | '}
            <Link href="https://chakri.com/privacy" style={smallLink}>Privacy</Link>
            {' | '}
            <Link href="https://chakri.com/help" style={smallLink}>Help Centre</Link>
          </Section>
          <Text style={footerText}>
            This message was emailed to by CHAKRI because you created a CHAKRI account.
          </Text>
          <Text style={footerText}>
            SRC: 64960d50_f00f0c1a-4e52-4efe-983e-101a709f71b5_en-GB_IN_EVO
          </Text>
        </Container>
      </Body>
      </Tailwind>
    </Html>
    )
    
  }
  export default ChakriVerificationEmails;
  
  const main = {
    backgroundColor: '#ffffff',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: '0 auto',
    padding: '0px',
    width: '100%',
  };

  const logo = {

    
  };
  
  const h1 = {
    color: '#000',
    fontSize: '32px',
    fontWeight: 'bold',
    margin: '0px',
    padding: '0px',
  };
  
  const text = {
    color: '#000',
    fontSize: '14px',
    lineHeight: '24px',
  };
  
  const button = {
    backgroundColor: '#e50914',
    borderRadius: '3px',
    color: '#fff',
    fontWeight: 'bold',
    textDecoration: 'none',
    padding:'10px',
    textAlign: 'center' as const,
    display: 'block',
    width: '100%',
  };
  
  const link = {
    color: '#067df7',
    textDecoration: 'underline',
  };
  
  const footerText = {
    color: '#666',
    fontSize: '12px',
    lineHeight: '16px',
  };
  
  const smallLink = {
    color: '#666',
    fontSize: '12px',
    textDecoration: 'underline',
  };
  
  const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
  };