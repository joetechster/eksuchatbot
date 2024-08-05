import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Set your OpenAI API key
# Access the API key from the environment
genai.configure(api_key=os.environ["GEMINI_API_KEY"])
model = genai.GenerativeModel('gemini-1.5-flash')

def get_diagnosis(question, context):
  custom_prompt_template = f"""
You are an information bot that gives details and information about 'Ekiti State University Ado-Ekiti (EKSU)'
You are to answer the users questions about ekiti state university using all information you have access to including the details you will be given
Details will not be given by the user but you can use details to answer the user question  
If you do not have enough information to reach a conclusion do not ask the user to provide any information try to approximate from all information you have access to
Give links to references to aid the user response effectively
Use any information you have access to to answer the user's question.
If you don't know the answer, just say that you don't know, don't try to make up an answer.
You can scrape information about the university from the school website (https://eksu.edu.ng/)
Context: {context}
Question: {question}
details: Best campus media is called kilonshele (can give recent happenings in eksu), you can shop in satellite gate in eksu 

Only return the helpful answer below and nothing else.
Helpful answer:
"""

  response = model.generate_content(custom_prompt_template)
  return response
