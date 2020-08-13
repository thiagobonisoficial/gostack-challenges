const cors = require('cors');
const { uuid } = require('uuidv4');
const express = require('express');

const repositories = [];

function checkHasRepositoryId(request, response, next) {
	const { id } = request.params;

	if (!id || repositories.findIndex((repo) => repo.id === id) === -1) {
		return response.status(400).send();
	}

	return next();
}

const app = express();
app.use(express.json());
app.use(cors());
app.use('/repositories/:id', checkHasRepositoryId);

app.get('/repositories', (request, response) => {
	response.json(repositories);
});

app.post('/repositories', (request, response) => {
	const { url, title, techs } = request.body;
	const repository = {
		id: uuid(),
		title,
		url,
		techs,
		likes: 0,
	};

	repositories.push(repository);

	return response.json(repository);
});

app.put('/repositories/:id', (request, response) => {
	const { id } = request.params;
	const { url, title, techs } = request.body;
	const repositoryIndex = repositories.findIndex((repo) => repo.id === id);
	const repository = repositories[repositoryIndex];

	if (url) {
		repository.url = url;
	}

	if (title) {
		repository.title = title;
	}

	if (techs) {
		repository.techs = techs;
	}

	repositories[repositoryIndex] = repository;

	return response.json(repository);
});

app.delete('/repositories/:id', (request, response) => {
	const { id } = request.params;
	const repositoryIndex = repositories.findIndex((repo) => repo.id === id);

	repositories.splice(repositoryIndex, 1);

	response.status(204).send();
});

app.post('/repositories/:id/like', (request, response) => {
	const { id } = request.params;
	const repositoryIndex = repositories.findIndex((repo) => repo.id === id);
	const repository = repositories[repositoryIndex];

	repository.likes++;

	return response.json(repository);
});

module.exports = app;
