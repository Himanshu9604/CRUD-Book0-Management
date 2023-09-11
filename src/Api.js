// export const API_URL='https://example-data.draftbit.com/books?_limit=50'
// export const BOOK_DETAILS_URL='https://example-data.draftbit.com/books/'
// export function getDeleteBookURL(bookId) {
//     return `${BOOK_DETAILS_URL}${bookId}`;
//   }

export const API_URL = 'https://example-data.draftbit.com/books?_limit=50';
export const BOOK_DETAILS_URL = 'https://example-data.draftbit.com/books/';

export function getDeleteBookURL(bookId) {
    return `${BOOK_DETAILS_URL}${bookId}`;
  }
  