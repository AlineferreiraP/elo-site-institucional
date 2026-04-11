from flask import Flask, render_template, request, redirect
import json
import os

app = Flask(__name__)

# Página inicial
@app.route("/")
def home():
    return render_template("index.html")

# Página sobre
@app.route("/sobre")
def sobre():
    return render_template("sobre.html")

# Página serviços
@app.route("/servicos")
def servicos():
    return render_template("servicos.html")

# Página contato (GET e POST)
@app.route("/contato", methods=["GET", "POST"])
def contato():

    if request.method == "POST":

        # pega dados do formulário
        nome = request.form.get("nome")
        email = request.form.get("email")
        mensagem = request.form.get("mensagem")

        # cria dicionário
        novo_contato = {
            "nome": nome,
            "email": email,
            "mensagem": mensagem
        }

        # verifica se arquivo existe
        if os.path.exists("contatos.json"):
            with open("contatos.json", "r") as arquivo:
                try:
                    contatos = json.load(arquivo)
                except:
                    contatos = []
        else:
            contatos = []

        # adiciona novo contato
        contatos.append(novo_contato)

        # salva novamente
        with open("contatos.json", "w") as arquivo:
            json.dump(contatos, arquivo, indent=4)

        return redirect("/contato")

    return render_template("contato.html")

if __name__ == "__main__":
    app.run(debug=True) 