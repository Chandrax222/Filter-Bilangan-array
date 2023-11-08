function panggilFilterParameters(value) {
    var arr = [
        {negara : 'Indonesia', benua : 'Asia'},
        {negara : 'Jerman', benua : 'Eropa'},
        {negara : 'Spanyol', benua : 'Eropa'},
        {negara : 'Korea', benua : 'Asia'},
        {negara : 'Portugal', benua : 'Eropa'},
        {negara : 'Amerika Serikat', benua : 'Amerika'},
    ];
    const benuaEropa = arr.filter (item => item.benua === 'Eropa'
    );
    const benuaAsia = arr.filter(item => item.benua === 'Asia'
    );
    console.log(benuaEropa);
    console.log(benuaAsia);
}
panggilFilterParameters();
