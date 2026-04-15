console.log("--- async/await - movie ---");
// 모델링
interface Data {
  articleList: Movie[];
}

interface Movie {
  title: string;
}

interface ShowData {
  title: string;
  rank: number;
}

async function fetchMovieDate(url: string): Promise<Data> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("요청실패 상태코드 : " + response.status);
  }

  const data: Data = await response.json();
  return data;
}

function validateMovieData(data: Data): void {
  if (!data.articleList || data.articleList.length === 0) {
    throw new Error("데이터가 없습니다.");
  }
}

function extractMovieInfos(articleList: Movie[]): ShowData[] {
  return articleList.map((articleList, index) => ({
    title: articleList.title,
    rank: index + 1,
  }));
}

function displayMovie(movieinfos: ShowData[]) {
  for (const movie of movieinfos) {
    console.log(`[${movie.rank}위] ${movie.title}`);
  }
}

const url =
  "http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";

async function movies(): Promise<void> {
  try {
    const data = await fetchMovieDate(url);
    validateMovieData(data);

    const movieinfos = extractMovieInfos(data.articleList);
    displayMovie(movieinfos);
  } catch (e: unknown) {
    // 에러는 무조건 unknown
    if (e instanceof Error) {
      console.log("에러 발생: ", e);
    } else {
      console.error("알 수 없는 에러 발생 ");
    }
  }
}

movies();
