console.log("=== mulpiple ===");
function mulpiple(num: number): void {
  for (let i = 1; i < 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

mulpiple(4);

console.log("=== grade ===");
function getGrade(score: number): string {
  let grade: string = "F";
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  }
  return grade;
}

console.log(getGrade(88));
console.log(getGrade(99));

console.log("=== movie info async/await ===");

interface Movie {
  title: string;
}

interface MovieInfos {
  articleList: Movie[];
}

interface RankInfo {
  title: string;
  rank: number;
}

async function getMovieMetaData(url: string): Promise<MovieInfos> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.status + ": Fail to fetch movie metadata");
  }

  const movies: MovieInfos = await response.json();
  return movies;
}

function validateData(movies: MovieInfos): void {
  if (!movies || !movies.articleList) {
    throw new Error("Invalid API response: missing articleList");
  }
}

function getMovieRankData(movies: Movie[]): RankInfo[] {
  return movies.map((movie, index) => ({
    title: movie.title,
    rank: index + 1,
  }));
}

function displayMovieRankData(movieRank: RankInfo[]) {
  movieRank.forEach((movie) => {
    console.log(`[${movie.rank}위] ${movie.title}`);
  });
}

async function showMovieConsole(url: string): Promise<void> {
  try {
    const movieMeta = await getMovieMetaData(url);
    validateData(movieMeta);

    const movieRank = getMovieRankData(movieMeta.articleList);
    displayMovieRankData(movieRank);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e);
    } else {
      console.log("알 수 없는 에러");
    }
  } finally {
    console.log("=== movie info promise ===");
  }
}

const url =
  "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";

showMovieConsole(url);

// === movie info promise ===
function getMovieMetaData1(url: string): Promise<MovieInfos> {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("connection error");
    } else {
      return response.json();
    }
  });
}

function validateData1(metaData: MovieInfos): Promise<Movie[]> {
  if (!metaData || metaData.articleList.length === 0) {
    return Promise.reject(new Error("data error"));
  } else {
    return Promise.resolve(metaData.articleList);
  }
}

function getMovieRankData1(movies: Movie[]): Promise<RankInfo[]> {
  return Promise.resolve(
    movies.map((movie, index) => ({
      title: movie.title,
      rank: index + 1,
    })),
  );
}

function displayMovieRankData1(movieRank: RankInfo[]) {
  movieRank.forEach((movie) => {
    console.log(`[${movie.rank}위] ${movie.title}`);
  });
}

async function showMovieConsole1(url: string): Promise<void> {
  try {
    await getMovieMetaData1(url)
      .then(validateData1)
      .then(getMovieRankData1)
      .then(displayMovieRankData1);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e);
    } else {
      console.log("알 수 없는 에러");
    }
  } finally {
    console.log("=== movie info promise end ===");
  }
}

showMovieConsole1(url);
