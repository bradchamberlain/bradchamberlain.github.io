var colors = ["#224466","#AA0000","#008800","#0000AA","#00FFCC","#CC00CC","#7733CC"];
var color_index = 0;
var low_e_string = 13, a_string = 45, d_string = 77, g_string = 109, b_string = 141, high_e_string = 173;
var all_notes = ["A","A&#x266f;/B&#x266d;","B","C","C&#x266f;/D&#x266d;","D","D&#x266f;/E&#x266d;","E","F","F&#x266f;/G&#x266d;","G","G&#x266f;/A&#x266d;"];
var major_fifths = [];
var minor_fifths = [];
var root_notes = [];
var frets = [];
var checkboxes = ["_major_triads","_minor_triads","_minor_pentatonic", "_major_pentatonic"];

major_fifths.F = [["AB","C"],["G","D","A"]];
major_fifths.C = [["F","G"], ["D","A","E"]];
major_fifths.G = [["D","C"], ["A","E","B"]];
major_fifths.D = [["A","G"], ["E","B","FG"]];
major_fifths.A = [["E","D"], ["B","FG","CD"]];
major_fifths.E = [["B","A"], ["GA","CD","FG"]];
major_fifths.B = [["FG","E"], ["DE","GA","CD"]];
major_fifths.FG = [["CD","B"], ["AB","DE","GA"]];
major_fifths.CD = [["GA","FG"], ["F","AB","DE"]];
major_fifths.GA = [["DE","CD"], ["C","F","AB"]];
major_fifths.DE = [["AB","GA"], ["G","C","F"]];
major_fifths.AB = [["F","DE"], ["D","G","C"]];

minor_fifths.F = [["DE","GA", "CD"],["AB","C"]];
minor_fifths.C = [["GA","DE","AB"],["F","G"]];
minor_fifths.G = [["DE","AB","F"],["D","C"]];
minor_fifths.D = [["AB","F","C"],["A","G"]];
minor_fifths.A = [["F","C","G"],["E","D"]];
minor_fifths.E = [["C","G","D"],["B","A"]];
minor_fifths.B = [["G","D","A"],["FG","E"]];
minor_fifths.FG = [["D","A","E"],["CD","B"]];
minor_fifths.CD = [["A","E","B"],["GA","FG"]];
minor_fifths.GA = [["E","B","FG"],["DE","CD"]];
minor_fifths.DE = [["CD","FG","B"],["AB","GA"]];
minor_fifths.AB = [["CD","FG","AB"],["F","DE"]];

frets["0"] = 10;
frets["1"] = 41;
frets["2"] = 74;
frets["3"] = 106;
frets["4"] = 138;
frets["5"] = 169;
frets["6"] = 201;
frets["7"] = 233;
frets["8"] = 265;
frets["9"] = 298;
frets["10"] = 329;
frets["11"] = 362;
frets["12"] = 394;
frets["13"] = 426;
frets["14"] = 458;
frets["15"] = 490;
frets["16"] = 522;
frets["17"] = 554;
frets["18"] = 586;
frets["19"] = 618;
frets["20"] = 650;

root_notes.A = [[low_e_string,frets["5"]],[low_e_string,frets["17"]],[a_string,frets["12"]],[d_string,frets["7"]],[d_string,frets["19"]],[g_string,frets["2"]],[g_string,frets["14"]],[b_string,frets["10"]],[a_string,frets["0"]],[high_e_string,frets["5"]],[high_e_string,frets["17"]]];
root_notes.AB = [[low_e_string,frets["6"]],[low_e_string,frets["18"]],[a_string,frets["13"]],[d_string,frets["8"]],[d_string,frets["20"]],[g_string,frets["3"]],[g_string,frets["15"]],[b_string,frets["11"]],[a_string,frets["1"]],[high_e_string,frets["6"]],[high_e_string,frets["18"]]];
root_notes.B = [[b_string, frets["0"]],[low_e_string,frets["7"]],[low_e_string,frets["19"]],[a_string,frets["2"]],[a_string,frets["14"]],[d_string,frets["9"]],[g_string,frets["4"]],[g_string,frets["16"]], [b_string,frets["12"]],[high_e_string,frets["7"]],[high_e_string,frets["19"]]];
root_notes.C = [[low_e_string,frets["8"]],[low_e_string,frets["20"]],[a_string,frets["3"]],[a_string,frets["15"]],[d_string,frets["10"]],[g_string,frets["5"]],[g_string,frets["17"]],[b_string,frets["1"]],[b_string,frets["13"]],[high_e_string,frets["8"]],[high_e_string,frets["20"]]];
root_notes.CD = [[low_e_string,frets["9"]],[a_string,frets["4"]],[a_string,frets["16"]],[d_string,frets["11"]],[g_string,frets["6"]],[g_string,frets["18"]],[b_string,frets["2"]],[b_string,frets["14"]],[high_e_string,frets["9"]]];
root_notes.D = [[d_string, frets["0"]],[low_e_string,frets["10"]],[a_string,frets["5"]],[a_string,frets["17"]],[d_string,frets["12"]],[g_string,frets["7"]],[g_string,frets["19"]],[b_string,frets["3"]],[b_string,frets["15"]],[high_e_string,frets["10"]]];
root_notes.DE = [[d_string, frets["1"]],[low_e_string,frets["11"]],[a_string,frets["6"]],[a_string,frets["18"]],[d_string,frets["13"]],[g_string,frets["8"]],[g_string,frets["20"]],[b_string,frets["4"]],[b_string,frets["16"]],[high_e_string,frets["11"]]];
root_notes.E = [[low_e_string, frets["0"]],[low_e_string,frets["12"]],[a_string,frets["7"]],[a_string,frets["19"]],[d_string,frets["2"]],[d_string,frets["14"]],[g_string,frets["9"]],[b_string,frets["5"]],[b_string,frets["17"]],[high_e_string, frets["0"]],[high_e_string,frets["12"]]];
root_notes.F = [[low_e_string,frets["1"]],[low_e_string,frets["13"]],[a_string,frets["8"]],[a_string,frets["20"]],[d_string,frets["3"]],[d_string,frets["15"]],[g_string,frets["10"]],[b_string,frets["6"]],[b_string,frets["18"]],[high_e_string,frets["1"]],[high_e_string,frets["13"]]];
root_notes.FG = [[low_e_string,frets["2"]],[low_e_string,frets["14"]],[a_string,frets["9"]],[d_string,frets["4"]],[d_string,frets["16"]],[g_string,frets["11"]],[b_string,frets["7"]],[b_string,frets["19"]],[high_e_string,frets["2"]],[high_e_string,frets["14"]]];
root_notes.G = [[g_string,frets["0"]],[low_e_string,frets["3"]],[low_e_string,frets["15"]],[a_string,frets["10"]],[d_string,frets["5"]],[d_string,frets["17"]],[g_string,frets["12"]],[b_string,frets["8"]],[b_string,frets["20"]],[high_e_string,frets["3"]],[high_e_string,frets["15"]]];
root_notes.GA = [[g_string,frets["1"]],[low_e_string,frets["4"]],[low_e_string,frets["16"]],[a_string,frets["11"]],[d_string,frets["6"]],[d_string,frets["18"]],[g_string,frets["13"]],[b_string,frets["9"]],[high_e_string,frets["4"]],[high_e_string,frets["16"]]];

function get_color()
{
    if(color_index >= colors.length)
    {
        color_index = 0;
    }
    var c = colors[color_index];
    color_index = color_index + 1;
    return c;
}

function add_notes(note, color, offsets){
    var tri_string = "";
    for(var i = 0 ; i < root_notes[note].length; i++ ){
        var current_root = root_notes[note][i];
        var current_fret = frets.indexOf(current_root[1]);
        for(var j = 0 ; j < offsets.length; j++)
        {
            if((offsets[j] < 0 && current_fret + offsets[j] > -1) || (offsets[j] > 0 && current_fret + offsets[j] < frets.length))
            {
                tri_string += '<circle cx="' + current_root[0] + '" cy="' + frets[current_fret + offsets[j]] + '" r="8" stroke="' + color + '" stroke-width="4" fill="transparent" />';
            }
        }
    }
    return tri_string;
}

function is_major(note)
{
    return document.getElementById("chk_" + note + "_major_triads").checked;
}

function is_minor(note)
{
    return document.getElementById("chk_" + note + "_minor_triads").checked;
}

function is_major_pent(note)
{
    return document.getElementById("chk_" + note + "_major_pentatonic").checked;
}

function is_minor_pent(note)
{
    return document.getElementById("chk_" + note + "_minor_pentatonic").checked;
}

function draw_notes(note, in_color = null, note_title = null) {
    
    var row = document.getElementById("real_notes_row");
    var checkboxElem = document.getElementById("chk_" + note);
    var x = document.getElementById("td_" + checkboxElem.value);
    if(x == null){
        x = row.insertCell();
        x.name = "td_" + note;
        x.id = "td_" + note;
    }
    
    var val = "<p align='center'>" + note_title + (is_major(note) ? " M. Triads" : is_minor(note) ? " m. Triads" : is_major_pent(note) ? " M. Pentatonic" : is_minor_pent(note) ? " m. Pentatonic" : "") + "</p>";
    var color = in_color;
    if(color === null)
    {
        color = get_color();
    }
    x.color = color;
    val += '<svg width="184" height="685" style="border:none;background-image: url(\'fret_board.png\');background-repeat: no-repeat;background-position: 5px;" id="test_svg">';
    for(var i = 0;i < root_notes[note].length; i++)
    {
        val += '<circle cx="' + root_notes[note][i][0] + '" cy="' + root_notes[note][i][1] + '" r="10" stroke="' + color + '" stroke-width="1" fill="' + color + '" />';
    }
    for(var cb=0;cb<checkboxes.length;cb++)
    {
        var cb_box = document.getElementById("chk_" + note + checkboxes[cb]);
        if(cb_box.checked)
        {
            var o = cb_box.value.split(",").map(Number);
            val += add_notes(note, color, o);
            var note_type = cb_box.getAttribute("note_type");
            color_fifths(note, cb_box.id.indexOf("major") > 0 ? "major" : "minor", note_type);
            break;
        }
    }
    
    val += '</svg>';
    x.innerHTML = val;
}

function checked_notes()
{
    var count = 0;
    for(var i=0;i<all_notes.length;i++)
    {
        var note_name = _name(i);
        if(document.getElementById("chk_" + note_name).checked)
        {
            count++;
        }
    }
    return count;
}

function reset_colors()
{
    for(var i=0;i<all_notes.length;i++)
    {
        var note_name = _name(i);
        document.getElementById("td_notes_" + note_name).style.color = "#000000";
    }
}

var major_color = "#FF6600";
var minor_color = "#0000CC";

function color_fifths(note,relative_type, triad_type)
{
    if(checked_notes() == 1)
    {
        reset_colors();

        document.getElementById("td_notes_" + major_fifths[note][0][0]).style.color = major_color;
        document.getElementById("chk_" +      major_fifths[note][0][0] + "_major_" + triad_type).checked = true;
        document.getElementById("td_notes_" + major_fifths[note][0][1]).style.color = major_color;
        document.getElementById("chk_" +      major_fifths[note][0][1] + "_major_" + triad_type).checked = true;
        document.getElementById("td_notes_" + major_fifths[note][1][0]).style.color = minor_color;
        document.getElementById("chk_" +      major_fifths[note][1][0] + "_minor_" + triad_type).checked = true;
        document.getElementById("td_notes_" + major_fifths[note][1][1]).style.color = minor_color;
        document.getElementById("chk_" +      major_fifths[note][1][1] + "_minor_" + triad_type).checked = true;

        if(relative_type === 'major')
        {
            document.getElementById("td_notes_" + major_fifths[note][1][2]).style.color = minor_color;
            document.getElementById("chk_" +      major_fifths[note][1][2] + "_minor_" + triad_type).checked = true;
        }
        else if(relative_type === 'minor')
        {
            document.getElementById("td_notes_" + minor_fifths[note][0][2]).style.color = major_color;
            document.getElementById("chk_" +      minor_fifths[note][0][2] + "_major_" + triad_type).checked = true;
        }
    }
}

function do_draw(note, print_title) {
    var checkboxElem = document.getElementById("chk_" + note);
    var tdata = document.getElementById("td_" + checkboxElem.value);
    var tdata_color = null;
    var row = document.getElementById("real_notes_row");
    if(checkboxElem.checked)
    {
        if(tdata != null)
        {
            tdata_color = tdata.color;
            tdata.innerHTML = "";
        }
        draw_notes(note, tdata_color, print_title);
        document.getElementById("div" + note).style.visibility = "visible";
    }
    else
    {
        document.getElementById("div" + note).style.visibility = "hidden";
        row.deleteCell(tdata.cellIndex);
        console.log(checked_notes());
        if(checked_notes() == 0)
        {
            reset_colors();
        }
    }
}

function _name(i)
{
    var name = all_notes[i];
    if(name.length > 1)
    {
        name = all_notes[i].substr(0,1) + all_notes[i].substr(10,1);
    }
    return name;
}

function draw_note_form()
{
    var table_content = "";
    for(var i=0;i<all_notes.length;i++)
    {
        if(i%3 == 0)
        {
            table_content += "<tr>";
        }
        var note_name = _name(i);
        table_content += "<td align=\"right\" id=\"td_notes_" + note_name + "\">";
        table_content += "<label for=\"chk_" + note_name + "\">" + all_notes[i] + "</label>";
        table_content += "<input type=\"checkbox\" id=\"chk_" + note_name + "\" name=\"chk_" + note_name + "\" value=\"" + note_name+ "\" onchange=\"do_draw('" + note_name + "','" + all_notes[i] + "');\" /></td><td>";
        table_content += "<div id=\"div" + note_name + "\" class=\"triad_options\">";
        table_content += "(<input type=\"radio\" note_type=\"triads\" name=\"chk_" + note_name + "_triads\" id=\"chk_" + note_name + "_major_triads\" value=\"-5,-8,4\" onchange=\"do_draw('" + note_name + "','" + all_notes[i] + "');\" />";
        table_content += " <label for=\"chk_" + note_name + "_major_triads\" class=\"maj_min\">major</label>";
        table_content += " <span class=\"option_divider\">|</span> ";
        table_content += "<input type=\"radio\" note_type=\"triads\" name=\"chk_" + note_name + "_triads\" id=\"chk_" + note_name + "_minor_triads\" value=\"-5,-9,3,7\" onchange=\"do_draw('" + note_name + "','" + all_notes[i] + "');\" />";
        table_content += "<label for=\"chk_" + note_name + "_minor_triads\" class=\"maj_min\">minor</label>";
        table_content += ") Triads ";
        table_content += "(<input type=\"radio\" note_type=\"pentatonic\" name=\"chk_" + note_name + "_triads\" id=\"chk_" + note_name + "_major_pentatonic\" value=\"-3,-5,-8,-10,2,4,7,9\" onchange=\"do_draw('" + note_name + "','" + all_notes[i] + "');\" />";
        table_content += "<label for=\"chk_" + note_name + "_triads\" class=\"maj_min\">major</label>";
        table_content += " <span class=\"option_divider\">|</span> ";
        table_content += "<input type=\"radio\" note_type=\"pentatonic\" name=\"chk_" + note_name + "_triads\" id=\"chk_" + note_name + "_minor_pentatonic\" value=\"-2,-5,-7,-9,3,5,7,10\" onchange=\"do_draw('" + note_name + "','" + all_notes[i] + "');\" />";
        table_content += "<label for=\"chk_" + note_name + "_minor_pentatonic\" class=\"maj_min\">minor</label>) Pentatonic";
        table_content += "</div>";
        table_content += "</td>";
        if(i%3>=2)
        {
            table_content += "</tr>";
        }
    }
    document.getElementById("note_form_table_body").innerHTML = table_content;
}
