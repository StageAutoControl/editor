import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Song} from "../../../lib/api/song/song";
import {SongService} from "../../../lib/api/song/song.service";
import {ConfirmationDialogComponent} from "../../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {filter, switchMap} from "rxjs/operators";
import {DMXSceneService} from "../../../lib/api/dmx/dmx-scene/dmx-scene.service";
import {SortingDataAccessor} from "../../sorting-data-accessor";
import {newName} from "../../names";
import {StorageService} from "../../../lib/storage/storage.service";

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.less']
})
export class SongListComponent implements OnInit {
  entities$: Observable<Song[]>;
  displayedColumns: string[] = ['name', 'barChanges', 'dmxScenes', 'midiCommands', 'actions'];
  dataSource = new MatTableDataSource<Song>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private songService: SongService,
    private dmxSceneService: DMXSceneService,
    private dialog: MatDialog,
    private storage: StorageService,
  ) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filter = this.storage.getString('SONG_LIST_FILTER');
    this.dataSource.sort.sort({id: 'name', start: 'asc', disableClear: false});
    this.dataSource.sortingDataAccessor = SortingDataAccessor;
    this.entities$ = this.songService.entities$;

    this.entities$.subscribe((songs: Song[]) => {
      this.dataSource.data = songs;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.storage.setString('SONG_LIST_FILTER', this.dataSource.filter);
  }

  copyEntity(entity: Song) {
    this.songService.create(Object.assign({}, entity, {id: null, name: newName(entity.name)})).subscribe();
  }

  deleteEntity(entity: Song) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          action: `delete Song ${entity.name}`,
        },
      })
      .afterClosed()
      .pipe(filter((result: boolean) => result))
      .pipe(switchMap(() => this.songService.remove(entity.id)))
      .subscribe()
  }
}
