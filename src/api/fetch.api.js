import { baseURL } from "./baseURL";

export async function resultsCaller ( endpoint ) { 
  const response = await fetch( `${ baseURL }/${endpoint}` );
  const { results } = await response.json();
  return results;
}

export function fetchImage (url) { 
  return require( `../media/images/${ url }` );
}

