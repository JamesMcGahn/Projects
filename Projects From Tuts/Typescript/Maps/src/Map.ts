interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class Map {
  private gooogleMap: google.maps.Map;
  constructor(divId: string) {
    this.gooogleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 3,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.gooogleMap,
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
    });
  }
}
