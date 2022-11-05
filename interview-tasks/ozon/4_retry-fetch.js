// Написать фунцию фетчей и ретраем

// Solution
async function fetchWithRetries(retriesCount, ...args) {
  try {
    const response = fetch(fetchArgs)

    return response
  } catch (e) {
    if (retriesCount > 0) {
      await fetchWithRetries(--retriesCount, ...args)
    } else {
      throw new Error(e)
    }
  }
}

// Test
fetchWithRetries(2, ...args)
