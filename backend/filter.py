
import json
import pandas as pd
from profanity_check import predict, predict_prob
import profanity
# df = pd.read_json("backend/datajson/1d00ea97a1d2d597ec4bf8c69c01b032462c0bad_1.json")

json_folder = "backend/datajson/4d3dd24c9ce6de493cfb119ac3304a3535ae5041_0.json"

import pandas as pd

def filterComment(jsondata):
    df = pd.read_json(jsondata)
    messages = df["Message"].tolist()  # Convert messages to a list
    probabilities = predict(messages)  # Assuming predict_prob is defined elsewhere
    for message, prediction in zip(messages, probabilities):
        if prediction == 1: 
            message




filterComment(json_folder)




