import "./signInPage.css"
import {SignIn} from "@clerk/clerk-react"
import { useNavigate } from "react-router-dom"

function SignInPage(){
  const navigate = useNavigate();
  
  const handleError = (error) => {
    console.error('Sign-in error:', error);
    // If user doesn't exist, silently redirect to sign-up
    if (error?.errors?.[0]?.code === 'form_identifier_not_found' || 
        error?.errors?.[0]?.message?.includes('not found') ||
        error?.errors?.[0]?.code === 'identifier_not_found' ||
        error?.message?.includes('User not found') ||
        error?.message?.includes('Account not found')) {
      // Silent redirect - better UX
      navigate('/sign-up');
    }
  };

  return (
    <div className="signInPage">
      <SignIn 
        path="/sign-in" 
        signUpUrl="/sign-up" 
        forceRedirectUrl="/dashboard"
        appearance={{
          elements: {
            card: {
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }
          }
        }}
        onError={handleError}
      />
    </div>
  )
}

export default SignInPage;