// 언제 Promise가 벗겨지냐 (data처리 시 주의할점!)
// 1. await
// 2. .then

interface Movie {
  title: string;
}

interface MetaData {
  articleList: Movie[];
}

interface RankInfo {
  title: string;
  rank: number;
}

async function fetchMetaData(url: string): Promise<MetaData> {
  const response: Response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.status + "fetch error");
  }

  const movieData: MetaData = await response.json();
  return movieData;
}

function validateData(movieData: Movie[]): void {
  if (!movieData || movieData.length === 0) {
    throw new Error("no data");
  }
}

function extrateMovieData(movieData: Movie[]) {
  return movieData.map((movie, index) => ({
    title: movie.title,
    rank: index + 1,
  }));
}

function displayMovieRankData(movies: RankInfo[]): void {
  movies.forEach((movie) => console.log(`[${movie.rank}위] ${movie.title}`));
}

const url =
  "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";
async function movie(url: string) {
  try {
    const metaData = await fetchMetaData(url);
    validateData(metaData.articleList);
    const movies = extrateMovieData(metaData.articleList);
    displayMovieRankData(movies);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("== pure promise ==");
  }
}

// movie(url);

function fetchMetaData1(url: string) {
  return fetch(url).then((response) => {
    if(response.ok) {
        return response.json();
    } else {
        throw new Error('fail to connect' + response.status);
    }
  });
}

function validateData1(movieData: Movie[]) {
  if (!movieData || movieData.length === 0) {
    throw new Error("no data");
  }
  return Promise.resolve(movieData);
}

function extrateMovieData1(movieData: Movie[]) {
  return Promise.resolve(
    movieData.map((movie, index) => ({
      title: movie.title,
      rank: index + 1,
    })),
  );
}

function displayMovieRankData1(movies: RankInfo[]): void {
  movies.forEach((movie) => console.log(`[${movie.rank}위] ${movie.title}`));
}

function movie1(url: string) {
  try {
    fetchMetaData1(url)
      .then((data) => validateData1(data.articleList))
      .then(extrateMovieData1)
      .then(displayMovieRankData1)
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
}

// movie1(url);

// todo app

