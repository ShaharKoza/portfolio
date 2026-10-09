import { getCollection, type CollectionEntry } from 'astro:content';

export async function getVisibleProjects(): Promise<CollectionEntry<'projects'>[]> {
  const showDrafts = import.meta.env.DEV;
  const projects = await getCollection('projects', ({ data }) => showDrafts || !data.draft);
  return projects.sort((a, b) => a.data.order - b.data.order);
}
