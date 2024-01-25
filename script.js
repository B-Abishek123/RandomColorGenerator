

function random_number_generator_f(){
    var random_number='#'+String(Math.random().toString(16).substr(-6));

    //To calculate the complimentary color :
    const colorPart = random_number.slice(1);
    const ind = parseInt(colorPart, 16);
    let iter = ((1 << 4 * colorPart.length) - 1 - ind).toString(16);
    while (iter.length < colorPart.length) {
        iter = '0' + iter;
    };
    complimentary_color = '#' + iter;

    return [random_number,complimentary_color];
};








function set_color_f(){

    document.getElementById('Copied_text').innerText=""

    var random_hex=random_number_generator_f()[0];
    var complimentary_color=random_number_generator_f()[1];

    document.body.style.backgroundColor = random_hex;

    document.getElementById('color_hex').innerText=random_hex;
    document.getElementById('complimentary_hex').innerText=complimentary_color;

    document.getElementById('color_name').style.backgroundColor=random_hex;
    document.getElementById('color_hex').style.backgroundColor=random_hex;
    document.getElementById('complimentary_name').style.backgroundColor=random_hex;
    document.getElementById('complimentary_hex').style.backgroundColor=random_hex;

};





const copy_data_f = async () => {

    random_hex=document.getElementById('color_hex').innerText;
    complimentary_color=document.getElementById('complimentary_hex').innerText;

    colordata=String('Hexacode of color : '+random_hex+'   Hexacode of complimentary color : '+complimentary_color)


    try {
        await navigator.clipboard.writeText(colordata);
      } catch (err) {
        alert('Failed To Copy !')
    }

    document.getElementById('Copied_text').innerText="Copied to Clipboard !";
};






$(document).ready(function(){
    $('#copy_button').click(function(){
        $('#Copied_text').fadeIn('slow');
    })
})