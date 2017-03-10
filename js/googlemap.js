                                            var map;
                                            var map2;
                                            var map3;
                                            var map4;

                                            function initMap() {
                                                
                                                var ipswich = {lat: 52.056736, lng: 1.148220};
                                                var colchester = {lat: 51.895927, lng:0.891874};
                                                var leicester = {lat: 52.636878, lng:-1.139759};
                                                var london = {lat: 51.507351, lng:-0.127758};
                                                
                                                var map = new google.maps.Map(document.getElementById('map'), {
                                                    zoom: 11,
                                                    center: ipswich
                                                    
                                                });
                                                
                                                var map2 = new google.maps.Map(document.getElementById('map2'), {
                                                    zoom: 11,
                                                    center: colchester
                                                    
                                                });
                                                
                                                 var map3 = new google.maps.Map(document.getElementById('map3'), {
                                                    zoom: 11,
                                                    center: leicester
                                                    
                                                });
                                                
                                                 var map4 = new google.maps.Map(document.getElementById('map4'), {
                                                    zoom: 11,
                                                    center: london
                                                    
                                                });
                                                
                                                var marker = new google.maps.Marker({
                                                    position:ipswich,
                                                    map: map
                                                });
                                                
                                                var marker2 = new google.maps.Marker({
                                                    position: colchester,
                                                    map: map2
                                                })
                                                
                                                var marker3 = new google.maps.Marker({
                                                    position: leicester,
                                                    map: map3
                                                })
                                                
                                                var marker4 = new google.maps.Marker({
                                                    position: london,
                                                    map: map4
                                                })
                                       
                                            }