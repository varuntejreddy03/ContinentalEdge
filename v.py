import requests
import pandas as pd

roll_number = "23P81A6234"

url = "https://jntuhresults.dhethi.com/api/getAcademicResult"
params = {"rollNumber": roll_number}

headers = {
    "User-Agent": "Mozilla/5.0",
    "Referer": "https://jntuhresults.vercel.app/"
}

response = requests.get(url, params=params, headers=headers)

print("Status:", response.status_code)

data = response.json()

# Inspect structure once
print(data)

records = []

# Adjust keys if needed after seeing actual JSON structure
for semester in data.get("data", []):
    sem_name = semester.get("semester")

    for subject in semester.get("subjects", []):
        records.append({
            "Semester": sem_name,
            "Subject Code": subject.get("subjectCode"),
            "Subject Name": subject.get("subjectName"),
            "Internal": subject.get("internalMarks"),
            "External": subject.get("externalMarks"),
            "Total": subject.get("totalMarks"),
            "Grade": subject.get("grade"),
            "Credits": subject.get("credits")
        })

df = pd.DataFrame(records)

print(df)
df.to_csv("results.csv", index=False)