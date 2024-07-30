// sendEmail.ts
export default async function sendEmail(email: string) {
    console.log(email, 'email');
    if (email) {
      try {
        const response = await fetch('/api/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log({ message: 'Email sent successfully', data });
        return data;
      } catch (error) {
        console.error({ message: 'Failed to send email', error });
        throw error;
      }
    } else {
      console.log('No email given');
      return false;
    }
  }