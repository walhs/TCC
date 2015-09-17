# TCC

##Backend description

* Subindo uma aplicação simples em rails com endpoints(urls que recebem os metodos http para o consumo de dados)
* [Tutorial](http://guides.rubyonrails.org/getting_started.html)
* A proposta deste projeto é conseguir capturar o comportamento do usuário em um site

##Git
Para mudar o protocolo de comunicação com o github de http(user e senha) para ssh(chave):

$git remote remove origin

$git remote add origin {ssh clone url}

## Installations
* sudo apt-get install ruby
* sudo apt-get install sqlite3
* sudo apt-get install ruby-dev
* sudo gem install rdoc
* sudo gem install rails

##Definitions

* Resources

Cada rota esta associada a um método de um Controller

Resources mapeiam as operações CRUD (Create, Read(show/index), Update, Destroy) em cima de uma entidade (Modelo)

```
Rails.application.routes.draw do
 
  resources :articles
  root 'welcome#index'
  
end
```

* Métodos http

put : editar dados

post: criar elemento novo

new: serve a tela para preencher os dados da minha entidade

create: é o endpoint que vai receber os dados que coloquei na tela do new, é uma função (por isso faz parte da api e o new não)

- o new serve o html do form_for, e nesse form vc preenche os dados que serão enviados ao create 

- temos uma api restfull quando são implementados todos os metodos http (get, post, put, delete)


* Form

Podemos ver que o erb criou um form em que a action é um post para articles/new, que é a mesma url em que esse template é retornado (ela mesmo):

```
<%= form_for :article do |f| %>
```

Portanto o form precisa direcionar para uma outra url. Essa ação que é usada para novos forms de submissão é chamada create, e portanto o form deve apontar para esta ação, desta forma:

```
<%= form_for :article, url: articles_path do |f| %>
```

O helper articles_path diz ao rails para apontar para a forma padrão do URI pattern associada ao prefixo articles. 

* Model

Strong parameters (medidas de segurança)

```
@article = Article.new(params.require(:article).permit(:title, :text)) 
```

==

```
@article = Article.new(article_params)

private
	def article_params
		params.require(:article).permit(:title, :text)
	end
```

## Capturing click position with ClickData

* Simulating POST

curl -X POST -d '{"x":"1", "y":"2", "user_token":"124abc", "scroll_position":"444"}' http://localhost:3000/clickdata --header "Content-Type:application/json"

* By far, o js está no arquivo application.js. Verificar!
