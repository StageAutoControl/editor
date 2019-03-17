export interface SetList {
  id?: string;
  name: string;
  songs: SongSelector[];
}

export interface SongSelector {
  id: string;
}
