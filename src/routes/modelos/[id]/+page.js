import { error } from "@sveltejs/kit";
import { getModelById } from "$lib/api/mockModels.js";

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const modelo = getModelById(params.id);

  if (!modelo) {
    // Lanza un error 404 si el modelo no existe
    throw error(404, "Modelo no encontrado:(");
  }

  return { modelo };
}
