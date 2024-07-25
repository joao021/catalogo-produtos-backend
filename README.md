
# Catalogo de Produtos Allu

Catalogo Allu é uma aplicação nestJs que exibe informações de produtos para aluguel. Esta aplicação está configurada para desenvolvimento, construção e execução com Docker.

## Requisitos

Certifique-se de ter os seguintes softwares instalados em seu sistema:
- Docker
- Node.js (para desenvolvimento local)
- Yarn (opcional, mas recomendado)

## Configuração do Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/joao021/catalogo-produtos-backend
cd catalogo-produtos-backend

```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione suas variáveis de ambiente:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=root_password
DB_DATABASE=catalogo_produtos

```

### 3. Configurar Docker

O projeto está configurado para usar Docker para desenvolvimento e produção. Certifique-se de que o Docker está instalado e configurado em seu sistema.

### 4. Subir os Containers Docker

Para iniciar os containers Docker, execute:

```bash
docker-compose up --build
```

Isso irá construir e iniciar os serviços conforme definido no arquivo `docker-compose.yml`.

### 5. Acessar a Aplicação

- A aplicação Next.js estará disponível em [http://localhost:3001](http://localhost:3001)


## Scripts Disponíveis

No `package.json`, os seguintes scripts estão disponíveis:

- `preinstall`: "npx npm-force-resolutions",
- `start:dev": `nest start --watch",
- `build`: "nest build",
- `format`: "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
- `start`: "nest start",
- `start:dev": `nest start --watch",
- `lint`: "eslint \"./**/*.{ts,tsx}\"",
- `test`: "jest"