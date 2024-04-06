from django.shortcuts import render, reverse
from django.contrib.auth.decorators import login_required
from .models import ChatBot
from django.http import HttpResponseRedirect, JsonResponse
import google.generativeai as genai

from django.views.decorators.csrf import csrf_exempt

# Create your views here.
# add here to your generated API key
genai.configure(api_key="AIzaSyARGTIlTrTVRgWxZuDCvNOTgN2XAKUjYk0")

def ask_question(request):
    if request.method == "POST":
        text = request.POST.get("text")
        model = genai.GenerativeModel("gemini-pro")
        chat = model.start_chat()
        response = chat.send_message(text)
        user = request.user
        ChatBot.objects.create(text_input=text, gemini_output=response.text, user=user)
        # Extract necessary data from response
        response_data = {
            "text": response.text,  # Assuming response.text contains the relevant response data
            # Add other relevant data from response if needed
        }
        return JsonResponse({"data": response_data})
    else:
        return HttpResponseRedirect(
            reverse("chat")
        )  # Redirect to chat page for GET requests

def chat(request):
    user = request.user
    chats = ChatBot.objects.filter(user=user)
    return render(request, "chat_bot.html", {"chats": chats})