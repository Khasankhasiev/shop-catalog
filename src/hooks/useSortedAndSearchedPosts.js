import { ref, computed } from "vue";

export default function useSortedPosts(sortedPosts) {
  const searchQuery = ref("");

  const sortedAndSearchedPosts = computed(() => {
    return sortedPosts.value.filter((post) =>
      post.title
        .toLowerCase()
        .trim()
        .includes(searchQuery.value.toLowerCase().trim())
    );
  });
  return {
    searchQuery,
    sortedAndSearchedPosts,
  };
}
