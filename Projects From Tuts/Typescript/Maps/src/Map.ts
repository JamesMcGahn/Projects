export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
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
    const marker = new google.maps.Marker({
      map: this.gooogleMap,
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.gooogleMap, marker);
    });
  }
}
