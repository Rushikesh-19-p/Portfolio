import { GOOGLE_FORM_ENDPOINT } from './constants';

export const submitForm = async (formData: FormData) => {
  try {
    const response = await fetch(GOOGLE_FORM_ENDPOINT, {
      method: 'POST',
    
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(Object.fromEntries(formData))
    });
    
    // Since no-cors mode doesn't give us response details,
    // we'll assume success if we reach this point
    return { success: true };
  } catch (error) {
    console.error('Form submission error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};