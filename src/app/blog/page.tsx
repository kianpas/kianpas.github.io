import { Post } from "@/types/post";
import { getPosts } from "@/services/posts";
import PostCard from "@/components/postCard/PostCard";
import PostPagination from "@/components/postPagination/PostPagination";
import Link from "next/link";

const BlogPage = async (props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string | string[] }>;
}) => {
  // searchParams가 Promise일 수 있으므로, 명시적으로 await 처리
  const resolvedSearchParams = (await props.searchParams) ?? {};
  console.log("resolvedSearchParams == ", resolvedSearchParams);

  //기본값 페이지
  // let currentPage = 1;
  const pageParam = resolvedSearchParams?.page;

  const parsedPage = Number(pageParam); // Number()는 빈 문자열, null, undefined를 0으로 변환
  const currentPage = !isNaN(parsedPage) && parsedPage > 0 ? parsedPage : 1;
  // 경고 메시지는 개발 환경에서만 출력되도록 할 수 있습니다.
  if (
    process.env.NODE_ENV === "development" &&
    pageParam &&
    currentPage === 1
  ) {
    console.warn(
      `Invalid 'page' parameter: "${pageParam}". Defaulting to page 1.`
    );
  }

  const response = await getPosts(currentPage);

  // 반환값으로 상태 판단
  if (response === null) {
    // getPosts 내부에서 에러 발생
    return <div>게시물을 불러오는 중 오류가 발생했습니다.</div>;
  }

  const { posts, totalPages } = response;

  if (posts.length === 0) {
    // 성공했지만 데이터가 없음
    return (
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* 헤더 */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl">
            Posts
          </h1>
        </div>
        <div className="py-16 text-center text-gray-500 dark:text-gray-400">
          표시할 게시물이 없습니다.
        </div>
        {/* 페이지네이션은 0개일 때 표시 안 함 */}
      </div>
    );
  }

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* 헤더 */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl">
            Posts
          </h1>
          <Link
            href="/blog/write"
            className="inline-flex items-center justify-center rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-600 dark:hover:bg-primary-700"
          >
            Write
          </Link>
        </div>
        {/* 포스트 목록 후보1*/}
        <div>
          <ul>
            {posts.map((post: Post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </ul>
        </div>
        {totalPages &&
          totalPages > 1 && ( // 전체 페이지 수가 1보다 클 때만 표시
            <div className="pt-8 pb-12 flex justify-center">
              {/* 페이지네이션 위아래 여백 및 가운데 정렬 */}
              {/* totalPages 전달 */}
              <PostPagination
                currentPage={currentPage}
                totalPages={totalPages}
              />
            </div>
          )}
      </div>
    </>
  );
};

export default BlogPage;
