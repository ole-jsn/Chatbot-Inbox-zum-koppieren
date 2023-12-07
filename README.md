ChatInbox:

1: Chatbot auf Botpress erstellen --> Code für Make Integration:

workflow.nocodeSuccess = false

const leadData = {
    Frage: workflow.Frage1,
}

try {
    const response = await axios.post('Webhook Link', leadData)
    workflow.nocodeSuccess = true
}
    catch (error) {
        console.error(error)
    }


2: Make integration erstellen (Webhook, ChatGPT(Prompt: Ermittle das Thema der folgenden Frage und fasse dieses Thema mit einem Nomen zusammen. Lasse "Thema:" weg und antworte direkt mit der Zusammenfassung

Frage: ), Google Sheet Add a Row)

3: Google Sheet webapp integration über "Apps Script"

4: git clone "Github repository Link" in einem lehren Codespace eingeben + anschließend alle dateien und ordner aus dem Hauptordner ziehen

5: Namen und Beschreibungen beim Einloggen ändern (unter: index.html, src components interface Disclaimer.tsx, src components interface Header.tsx)

6: Google Sheet Link in der index.html Datei ändern

7: Make Integration fürs Löschen (webhook, ChatGPT(Prompt: Du bekommst eine Nachricht mit einer Zahl. Wenn diese Zahl "1" ist, dann sendest du eine "2" weiter. Wenn die Zahl größer als "1" ist, dann sendest du genau diese Zahl weiter. Wenn mehrere Zahlen gesendet werden, dann sendest du nur die erst genannte Zahl weiter. Deine Nachricht muss immer nur aus einer Zahl bestehen und nie noch aus Wörtern, Buchstaben, oder Satzzeichen.
Nachricht: ), Google Sheet delete a Row)

8: Webhook Link in der index.html Datei ändern

9: Repository erstellen

10: Auf vercel.com neues Projekt mit entsprechendem Repository erstellen