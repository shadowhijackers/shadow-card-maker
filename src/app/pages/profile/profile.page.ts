import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {concatMap, filter} from "rxjs/operators";

import {ApiService} from "../../core/providers/api.service";
import {ProfileInfo, ProfileInfoBuilder, ProfileInfoImpl} from "../../core/models/profile-builder";
import {AlertService} from "../../core/providers/alert.service";
import {MapboxOptions} from "mapbox-gl";
import {MapboxService} from "../../shared/mapbox/mapbox.service";

@Component({
  selector: 'app-home',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  providers: [MapboxService]
})
export class ProfilePage implements OnInit {
  contactForm = new FormGroup({
    from: new FormControl('', [Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });
  profileInfo: ProfileInfoImpl;
  mapOptions: MapboxOptions = {
    center: [80.270721, 13.082680],
    zoom: 13,
  } as MapboxOptions;

  constructor(
    private domSanitizer: DomSanitizer,
    private api: ApiService,
    private routes: ActivatedRoute,
    private alertService: AlertService,
    private mapboxService: MapboxService
  ) {
  }

  ngOnInit() {
    this.routes.queryParams.pipe(
      concatMap(params => this.api.fetchProfileInfo(params['id'])),
      filter(res => !!res && !!res.data)
    ).subscribe((response) => {
      this.handleFetchProfileInfoResponse(response);
    })
  }

  handleFetchProfileInfoResponse(response: { error: boolean, data: ProfileInfo }) {
    if (!response || response.error) {
      this.alertService.toastAlert('Sorry We couldn\'t found given profile');
      return;
    }

    this.profileInfo = new ProfileInfoBuilder(response.data?.id)
      .setDisplayName(response.data?.displayName)
      .setHeadLineName(response.data?.headlineName)
      .setDescription(response.data?.description)
      .setCoverImgSrc(response.data?.coverImgSrc)
      .setLogoImgSrc(response.data?.logoImgSrc)
      .setContact(response.data?.contact)
      .setSocialMediaLinks(response?.data?.socialMediaLinks)
      .setGalleries(response.data?.galleries)
      .setVideos(response.data?.galleries)
      .build();
  }

  handleIFrameLoad($event: Event) {
  }

  submitEmail() {
    this.api.submitMail(this.profileInfo.id, this.contactForm.value).subscribe()
  }

  getMapIns(map) {
    this.mapboxService.addMarker(map, [80.270721, 13.082680])
  }
}
