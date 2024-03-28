export interface IElasticSearch {
  health: () => Promise<boolean>;
}
