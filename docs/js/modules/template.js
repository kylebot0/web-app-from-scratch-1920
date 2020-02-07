export default function template(template, data) {
    let regex = /<%([^%>]+)?%>/g, 
    reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, 
    code = 'var r=[];\\n', 
    cursor = 0, match;

    var add = function (line, js) {
        js ? (code += line.match(reExp) ? line + '\\n' : 'r.push(' + line + ');\\n') :
            (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\\\"') + '");\\n' : '');
        return add;
    }

    while (match = regex.exec(template)) {
        add(template.slice(cursor, match.index))(match[1], true);
        cursor = match.index + match[0].length;
    }
    add(template.substr(cursor, template.length - cursor));
    code += 'return r.join("");';
    return new Function(code.replace(/[\\r\\t\\n]/g, '')).apply(data);
}
