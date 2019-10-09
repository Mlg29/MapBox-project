var config = {
    style: 'mapbox://styles/lawalmukhtar29/ck1j59sf00ptd1cmo3laoo17z', //TODO
    accessToken: 'pk.eyJ1IjoibGF3YWxtdWtodGFyMjkiLCJhIjoiY2sxajJ6dTNjMDc0aTNtbDlsZzJzYnh0NSJ9.SubW7ls0YFKkSVOEti3ytg', //TODO
    title: 'My First Logo', //TODO
    subtitle: 'YOUR MAP SUBTITLE', //TODO
    byline: 'Lawal Mukhtar', //TODO
    footer: 'Created at Concatenate Lagos 2019',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    chapters: [
        //TODO replace this data with data from the first point in your dataset
        {
            id: 'id',
            title: 'where i live',
            description: 'I spent all my live living at the particular local government',
            location: {
              "center": [
                3.5244029322571464,
                6.5935422452946
              ],
              "zoom": 10,
              "pitch": 0,
              "bearing": 0
            }
        },
        {
            id: 'id2',
            title: 'where i schooled',
            description: 'I went through my basic school here',
            location: {
              "center": [
                3.534624739239547,
                6.58032238263651
              ],
              "zoom": 10,
              "pitch": 0,
              "bearing": 0
            }
        },
        //TODO Copy-paste more chapters here - one for each point in your dataset!
    ]
};
