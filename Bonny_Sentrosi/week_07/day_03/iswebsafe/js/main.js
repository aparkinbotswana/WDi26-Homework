




(function() {

  var $output;
  var _inited = false;
  var _locked = false;
  var _buffer = [];
  var _obuffer = [];
  var _ibuffer = [];
  var _cwd = "/";
  var _prompt = function() { return _cwd + " $ "; };
  var _history = [];
  var _hindex = -1;
  var _lhindex = -1;

  var _filetree = {
    'documents': {type: 'dir', files: {
      'example1': {type: 'file', mime: 'text/plain', content: "This is just an example file"},
      'example2': {type: 'file', mime: 'text/plain', content: "This is just an example file. What did you think it was?"},
      'example3': {type: 'file', mime: 'text/plain', content: "This is just an example file. I'm super cereal!"},
      'example4': {type: 'file', mime: 'text/plain', content: "This is just an example file. Such wow!"},
      'example5': {type: 'file', mime: 'text/plain', content: "This is just an example file. Jelly much?"}
    }},
    'storage':   {type: 'dir', files: {
    }},
    'AUTHORS': {type: 'file', mime: 'text/plain', content: "HACKED WITH LOVE BY BONNY SENTROSI <3 "},
    'README' : {type: 'file', mime: 'text/plain', content: 'All you see here is CSS. No images were used or harmed in creation of this demo'},
    'LICENSE': {type: 'file', mime: 'text/plain', content: "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."}
  };

  var _commands = {

    ls: function(dir) {
      dir = parsepath((dir || _cwd));

      var out = [];
      var iter = getiter(dir);

      var p;
      var tree = (iter && iter.type == 'dir') ? iter.files : _filetree;
      var count = 0;
      var total = 0;

      for ( var i in tree ) {
        if ( tree.hasOwnProperty(i) ) {
          p = tree[i];
          if ( p.type == 'dir' ) {
            out.push(format('{0} {1} {2}', padRight('<'+i+'>', 20), padRight(p.type, 20), '0'));
          } else {
            out.push(format('{0} {1} {2}', padRight(i, 20), padRight(p.mime, 20), p.content.length));
            total += p.content.length;
          }
          count++;
        }
      }

      out.push(format("\n{0} file(s) in total, {1} byte(s)", count, total));

      return out.join("\n");
    },

    cd: function(dir) {
      if ( !dir ) {
        return (["You need to supply argument: dir"]).join("\n");
      }

      var dirname = parsepath(dir);
      var iter = getiter(dirname);
      if ( dirname == '/' || (iter && iter.type == 'dir')) {
        _cwd = dirname;
        return (['Entered: ' + dirname]).join("\n");
      }

      return (["Path not found: " + dirname]).join("\n");
    },

    cat: function(file) {
      if ( !file ) {
        return (["You need to supply argument: filename"]).join("\n");
      }

      var filename = parsepath(file);
      var iter = getiter(filename);
      if ( !iter ) {
        return (["File not found: " + filename]).join("\n");
      }

      return iter.content;
    },

    cwd: function() {
      return (['Current directory: ' + _cwd]).join("\n");
    },

    clear: function() {
      return false;
    },

    contact: function(key) {
      key = key || '';
      var out = [];

      switch ( key.toLowerCase() ) {
        case 'email' :
          window.open('mailto:bonny.sentrosi@gmail.com');
          break;
        case 'github' :
          window.open('https://github.com/Sentrosi-Git/');
          break;
        case 'linkedin' :
          window.open('http://www.linkedin.com/in/bonnysentrosi');
          break;
        case 'twitter' :
          window.open('https://twitter.com/#!/bonnysentrosi');
          break;


        default :
          if ( key.length ) {
            out = ['Invalid key: ' + key];
          } else {
            out = [
              "Contact information:\n",
              'Name:      Bonny Sentrosi',
              'Email:     bonny.sentrosi@gmail.com',
              'Github:    https://github.com/Sentrosi-Git',
              'LinkedIn:  http://www.linkedin.com/in/bonnysentrosi',
              'Twitter:   https://twitter.com/#!/bonnysentrosi'
            ];
          }
          break;
      }

      return out.join("\n");
    },

    help: function() {
      var out = [
        'help                                         This command',
        'iswebsafe <url>                              Get a web rating for a url (example: `fancy.com`)',
        'contact                                      How to contact author',
        'contact <key>                                Open page (example: `email` or `twitter`)',
        'clear                                        Clears the screen',
        'ls                                           List current (or given) directory contents',
        'cd <dir>                                     Enter directory',
        'cat <filename>                               Show file contents',
        ''
      ];

      return out.join("\n");
    },

    iswebsafe: function (query) {
      // console.log(info);
      switch(query) {
        case 'facebook.com' :
        print(`Facebook is the devil's work. I don't care what the ratings are... they can't be trusted, but whatever...`);
        break;

        case 'google.com' :
        print(`Seriously? You have no imagination dude. But hey.... sure, here you go...`);
        break;

        case 'youporn.com' :
        print(`....... Downloading...... "horsecock_gang_bang.mp4" to "Desktop"........80%......100%...Completed!`)
        break;

      };
       // Don't leave the page.
      // const query = $('#query').val();

      // $.getJSON(`http://api.mywot.com/0.4/public_link_json2?hosts=facebook.COM/&key=f4da2770504d9c1cd48af8e553dc6475da15edca`).done(function (info) {
      // $.getJSON(`https://www.googleapis.com/books/v1/volumes?q=${'url'}&key=AIzaSyBF8P4dnNVmiUkKdSlnU3fdPjvF2Kpy5aQ`).done(function (info) {
      // $.getJSON(`https://www.googleapis.com/books/v1/volumes?q=${'url'}+inauthor:keyes&key=AIzaSyBF8P4dnNVmiUkKdSlnU3fdPjvF2Kpy5aQ`).done(function (info) {
      // $.getJSON(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBF8P4dnNVmiUkKdSlnU3fdPjvF2Kpy5aQ`).done(function (info) {
          // console.log(info);
          // const rates = info.items[1].volumeInfo.averageRating;
          // const counts = info.items[1].volumeInfo.ratingsCount;
          // let averageRating = (rates+counts/2);
          // const title = info.items[2].RatingsCount;
          // const title = info.items[0].volumeInfo.title;
          // print(`${title} ${low}`);
          //   print(`${averageRating}`);



          $.getJSON(`http://api.mywot.com/0.4/public_link_json2?hosts=${query}/&key=f4da2770504d9c1cd48af8e553dc6475da15edca`).done(function (info) {
          // $.getJSON(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBF8P4dnNVmiUkKdSlnU3fdPjvF2Kpy5aQ`).done(function (info) {
          console.log(info);
          // let results = 'query';
          const highAverage = Object.values( info )[0][0][0];
          const lowAverage = Object.values( info )[0][1][1];
          // console.log();
          let averageTrust = ((highAverage+lowAverage)/2);
          // const title = info.items[2].RatingsCount;
          // const title = info.items[0].volumeInfo.title;
          // print(`${highAverage} ${lowAverage}`);
            if (averageTrust >= 80) {
              print(`${query} has an anverage trust rating of: ${averageTrust}. People think it's totally trustworthy bro.`);
            } else if (averageTrust >= 60){
              print(`${query} has an anverage trust rating of: ${averageTrust}. That's a pretty sweet rating.`);
            } else if (averageTrust >= 40) {
              print(`${query} has an anverage trust rating of: ${averageTrust}. I'll be honest....  it's not looking good`);
            } else if (averageTrust >= 20) {
              print(`${query} has an anverage rating of only: ${averageTrust}! Holy crap! Don't use your credit cards here!`);
            } else {
              print(`DANGER! RUN AWAY!! DO NOT USE THIS SITE!! ILLUMINATI CONFIRMED!!`)
            };


      }).fail(function () {
        print('Something bad happened');
      });
    }
  }





  /////////////////////////////////////////////////////////////////
  // UTILS
  /////////////////////////////////////////////////////////////////

  function setSelectionRange(input, selectionStart, selectionEnd) {
    if (input.setSelectionRange) {
      input.focus();
      input.setSelectionRange(selectionStart, selectionEnd);
    }
    else if (input.createTextRange) {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveEnd('character', selectionEnd);
      range.moveStart('character', selectionStart);
      range.select();
    }
  }

  function format(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    var sprintfRegex = /\{(\d+)\}/g;

    var sprintf = function (match, number) {
      return number in args ? args[number] : match;
    };

    return format.replace(sprintfRegex, sprintf);
  }


  function padRight(str, l, c) {
    return str+Array(l-str.length+1).join(c||" ")
  }

  function padCenter(str, width, padding) {
    var _repeat = function(s, num) {
      for( var i = 0, buf = ""; i < num; i++ ) buf += s;
      return buf;
    };

    padding = (padding || ' ').substr( 0, 1 );
    if ( str.length < width ) {
      var len     = width - str.length;
      var remain  = ( len % 2 == 0 ) ? "" : padding;
      var pads    = _repeat(padding, parseInt(len / 2));
      return pads + str + pads + remain;
    }

    return str;
  }

  function parsepath(p) {
    var dir = (p.match(/^\//) ? p : (_cwd  + '/' + p)).replace(/\/+/g, '/');
    return realpath(dir) || '/';
  }

  function getiter(path) {
    var parts = (path.replace(/^\//, '') || '/').split("/");
    var iter = null;

    var last = _filetree;
    while ( parts.length ) {
      var i = parts.shift();
      if ( !last[i] ) break;

      if ( !parts.length ) {
        iter = last[i];
      } else {
        last = last[i].type == 'dir' ? last[i].files : {};
      }
    }

    return iter;
  }

  function realpath(path) {
    var parts = path.split(/\//);
    var path = [];
    for ( var i in parts ) {
      if ( parts.hasOwnProperty(i) ) {
        if ( parts[i] == '.' ) {
          continue;
        }

        if ( parts[i] == '..' ) {
          if ( path.length ) {
            path.pop();
          }
        } else {
          path.push(parts[i]);
        }
      }
    }

    return path.join('/');
  }

  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    function( callback ){
      window.setTimeout(callback, 1000 / 60);
    };
  })();

  /////////////////////////////////////////////////////////////////
  // SHELL
  /////////////////////////////////////////////////////////////////

  (function animloop(){
    requestAnimFrame(animloop);

    if ( _obuffer.length ) {
      $output.value += _obuffer.shift();
      _locked = true;

      update();
    } else {
      if ( _ibuffer.length ) {
        $output.value += _ibuffer.shift();

        update();
      }

      _locked = false;
      _inited = true;
    }
  })();

  function print(input, lp) {
    update();
    _obuffer = _obuffer.concat(lp ? [input] : input.split(''));
  }

  function update() {
    $output.focus();
    var l = $output.value.length;
    setSelectionRange($output, l, l);
    $output.scrollTop = $output.scrollHeight;
  }

  function clear() {
    $output.value = '';
    _ibuffer = [];
    _obuffer = [];
    print("");
  }

  function command(cmd) {
    print("\n");
    if ( cmd.length ) {
      var a = cmd.split(' ');
      var c = a.shift();
      if ( c in _commands ) {
        var result = _commands[c].apply(_commands, a);
        if ( result === false ) {
          clear();
        } else {
          print(result || "\n", true);
        }
      } else {
        print("Unknown command: " + c);
      }

      _history.push(cmd);
    }
    print("\n\n" + _prompt());

    _hindex = -1;
  }

  // const addTheImage = [];
  //   addTheImage[0] = new Image();
  //   addTheImage[0].src = "compman.gif";
  //   addTheImage[0].style.position = "absolute";
  //   addTheImage[0].style.left = "100px";
  //   addTheImage[0].style.top = "150px";
  //   document.body.createElement(addTheImage[0]);
    // update();


  function nextHistory() {
    if ( !_history.length ) return;

    var insert;
    if ( _hindex == -1 ) {
      _hindex  = _history.length - 1;
      _lhindex = -1;
      insert   = _history[_hindex];
    } else {
      if ( _hindex > 1 ) {
        _lhindex = _hindex;
        _hindex--;
        insert = _history[_hindex];
      }
    }

    if ( insert ) {
      if ( _lhindex != -1 ) {
        var txt = _history[_lhindex];
        $output.value = $output.value.substr(0, $output.value.length - txt.length);
        update();
      }
      _buffer = insert.split('');
      _ibuffer = insert.split('');
    }
  }

  window.onload = function() {
    $output = document.getElementById("output");
    $output.contentEditable = true;
    $output.spellcheck = false;
    $output.value = '';

    $output.onkeydown = function(ev) {
      var k = ev.which || ev.keyCode;
      var cancel = false;

      if ( !_inited ) {
        cancel = true;
      } else {
        if ( k == 9 ) {
          cancel = true;
        } else if ( k == 38 ) {
          nextHistory();
          cancel = true;
        } else if ( k == 40 ) {
          cancel = true;
        } else if ( k == 37 || k == 39 ) {
          cancel = true;
        }
      }

      if ( cancel ) {
        ev.preventDefault();
        ev.stopPropagation();
        return false;
      }

      if ( k == 8 ) {
        if ( _buffer.length ) {
          _buffer.pop();
        } else {
          ev.preventDefault();
          return false;
        }
      }

      return true;
    };

    $output.onkeypress = function(ev) {
      ev.preventDefault();
      if ( !_inited ) {
        return false;
      }

      var k = ev.which || ev.keyCode;
      if ( k == 13 ) {
        var cmd = _buffer.join('').replace(/\s+/, ' ');
        _buffer = [];
        command(cmd);
      } else {
        if ( !_locked ) {
          var kc = String.fromCharCode(k);
          _buffer.push(kc);
          _ibuffer.push(kc);
        }
      }

      return true;
    };

    $output.onfocus = function() {
      update();
    };

    $output.onblur = function() {
      update();
    };

    window.onfocus = function() {
      update();
    };

    print("Initializing Webulizer 9000 v0.5beta ................................................\n");
    print("Copyright (c) 2018 Bonny Sentrosi <bonnysentrosi@gmail.com>\n\n", true);

    //print("------------------------------------------------------------------------------------------------------------------");
    print("                  @@@  @@@  @@@  @@@@@@@@  @@@        @@@@@@@   @@@@@@   @@@@@@@@@@   @@@@@@@@                  \n", true);
    print("                  @@@  @@@  @@@  @@@@@@@@  @@@       @@@@@@@@  @@@@@@@@  @@@@@@@@@@@  @@@@@@@@                  \n", true);
    print("                  @@!  @@!  @@!  @@!       @@!       !@@       @@!  @@@  @@! @@! @@!  @@!                       \n", true);
    print("                  !@!  !@!  !@!  !@!       !@!       !@!       !@!  @!@  !@! !@! !@!  !@!                       \n", true);
    print("                  @!!  !!@  @!@  @!!!:!    @!!       !@!       @!@  !@!  @!! !!@ @!@  @!!!:!                    \n", true);
    print("                  !@!  !!!  !@!  !!!!!:    !!!       !!!       !@!  !!!  !@!   ! !@!  !!!!!:                    \n", true);
    print("                  !!:  !!:  !!:  !!:       !!:       :!!       !!:  !!!  !!:     !!:  !!:                       \n", true);
    print("                  :!:  :!:  :!:  :!:        :!:      :!:       :!:  !:!  :!:     :!:  :!:                       \n", true);
    print("                   :::: :: :::    :: ::::   :: ::::   ::: :::  ::::: ::  :::     ::    :: ::::                  \n", true);
    print("                    :: :  : :    : :: ::   : :: : :   :: :: :   : :  :    :      :    : :: ::                   \n", true);
    print("\n\n\n", true);
    // addTheImage();
    print(padCenter("All graphics are created using CSS, no static files or images\n", 113), true);
    print("\n\n\n\n\n", true);
    print("Type 'help' for a list of available commands.\n", true);
    print("\n\n" + _prompt());

  };

})();
