/**
 * Danish translation
 * @author Mark Topper (webman.io)
 * @version 2014-12-19
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['elfinder'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('elfinder'));
    } else {
        factory(root.elFinder);
    }
}(this, function (elFinder) {
    elFinder.prototype.i18.da = {
        translator: 'Mark Topper (webman.io)',
        language: 'Language of translation in Danish',
        direction: 'ltr',
        dateFormat: 'd.m.Y H:i',
        fancyDateFormat: '$1 H:i',
        messages: {

            /********************************** errors **********************************/
            'error': 'Fejl',
            'errUnknown': 'Ukendt fejl.',
            'errUnknownCmd': 'Ukendt kommando.',
            'errJqui': 'Ugyldig jQuery UI konfiguration. Valgbare, som kan trækkes rundt og droppable komponenter skal medtages.',
            'errNode': 'elFinder kræver DOM Element oprettet.',
            'errURL': 'Ugyldig elFinder konfiguration! URL option er ikke sat.',
            'errAccess': 'Adgang nægtet.',
            'errConnect': 'Kan ikke få kontatkt med backend.',
            'errAbort': 'Forbindelse afbrudt.',
            'errTimeout': 'Connection timeout.',
            'errNotFound': 'Backend ikke fundet.',
            'errResponse': 'Ugyldigt backend svar.',
            'errConf': 'Ugyldig backend konfiguration.',
            'errJSON': 'PHP JSON module ikke installeret.',
            'errNoVolumes': 'Læsbare volumener ikke tilgængelig.',
            'errCmdParams': 'Ugyldige parametre for kommando "$1".',
            'errDataNotJSON': 'Data er ikke JSON.',
            'errDataEmpty': 'Data er tomt.',
            'errCmdReq': 'Backend request kræver kommando navn.',
            'errOpen': 'Kunne ikke åbne "$1".',
            'errNotFolder': 'Objektet er ikke en mappe.',
            'errNotFile': 'Objektet er ikke en fil.',
            'errRead': 'Kunne ikke læse "$1".',
            'errWrite': 'Kunne ikke skrive til "$1".',
            'errPerm': 'Adgang nægtet.',
            'errLocked': '"$1" er låst og kan ikke blive omdøbt, flyttet eller slettet.',
            'errExists': 'Der findes allerede en fil ved navn "$1".',
            'errInvName': 'Ugyldigt fil navn.',
            'errFolderNotFound': 'Mappe ikke fundet.',
            'errFileNotFound': 'Fil ikke fundet.',
            'errTrgFolderNotFound': 'Mappen "$1" blev ikke fundet.',
            'errPopup': 'Browseren forhindrede åbne popup-vindue. For at åbne filen aktivere popup-vinduer i browserindstillinger.',
            'errMkdir': 'Kunne ikke oprette mappen "$1".',
            'errMkfile': 'Kunne ikke oprette filen "$1".',
            'errRename': 'Kunne ikke omdøbe "$1".',
            'errCopyFrom': 'Kopiering af filer fra volumen "$1" er ikke tilladt.',
            'errCopyTo': 'Kopiering af filer til volumen "$1" er ikke tilladt.',
            'errUpload': 'Upload fejl.',
            'errUploadFile': 'Kunne ikke uploade "$1".',
            'errUploadNoFiles': 'Ingen filer fundet til upload.',
            'errUploadTotalSize': 'Dataen overskrider den maksimalt tilladte størrelse.',
            'errUploadFileSize': 'Fil overskrider den maksimalt tilladte størrelse.',
            'errUploadMime': 'Fil type ikke godkendt.',
            'errUploadTransfer': '"$1" overførsels fejl.',
            'errNotReplace': 'Object "$1" already exists at this location and can not be replaced by object with another type.',
            'errReplace': 'Unable to replace "$1".',
            'errSave': 'Kunne ikke gemme "$1".',
            'errCopy': 'Kunne ikke kopier "$1".',
            'errMove': 'Kunne ikke flytte "$1".',
            'errCopyInItself': 'Kunne ikke kopier "$1" ind i sig selv.',
            'errRm': 'Kunne ikke slette "$1".',
            'errRmSrc': 'Unable remove source file(s).',
            'errExtract': 'Kunne ikke udpakke filer fra "$1".',
            'errArchive': 'Kunne ikke oprette arkiv.',
            'errArcType': 'Arkiv typen er ikke understøttet.',
            'errNoArchive': 'Filen er ikke et arkiv eller har ikke-understøttet arkiv type.',
            'errCmdNoSupport': 'Backend understøtter ikke denne kommando.',
            'errReplByChild': 'Mappen "$1" kan ikke erstattes af en vare, den indeholder.',
            'errArcSymlinks': 'Af sikkerhedsmæssige årsager nægtede at udpakke arkiver der indeholder symlinks eller filer med ikke tilladte navne.', // edited 24.06.2012
            'errArcMaxSize': 'Arkivfiler overskrider den maksimalt tilladte størrelse.',
            'errResize': 'Kunne ikke ændre størrelsen på "$1".',
            'errResizeDegree': 'Invalid rotate degree.',
            'errResizeRotate': 'Unable to rotate image.',
            'errResizeSize': 'Invalid image size.',
            'errResizeNoChange': 'Image size not changed.',
            'errUsupportType': 'Ikke-understøttet fil type.',
            'errNotUTF8Content': 'Filen "$1" er ikke i UTF-8 og kan ikke blive redigeret.', // added 9.11.2011
            'errNetMount': 'Kunne ikke mounte "$1".', // added 17.04.2012
            'errNetMountNoDriver': 'Ikke-understøttet protocol.', // added 17.04.2012
            'errNetMountFailed': 'Mount mislykkedes.', // added 17.04.2012
            'errNetMountHostReq': 'Host krævet.', // added 18.04.2012
            'errSessionExpires': 'Your session has expired due to inactivity.',
            'errCreatingTempDir': 'Unable to create temporary directory: "$1"',
            'errFtpDownloadFile': 'Unable to download file from FTP: "$1"',
            'errFtpUploadFile': 'Unable to upload file to FTP: "$1"',
            'errFtpMkdir': 'Unable to create remote directory on FTP: "$1"',
            'errArchiveExec': 'Error while archiving files: "$1"',
            'errExtractExec': 'Error while extracting files: "$1"',

            /******************************* commands names ********************************/
            'cmdarchive': 'Lav arkiv',
            'cmdback': 'Tilbage',
            'cmdcopy': 'Kopier',
            'cmdcut': 'Klip',
            'cmddownload': 'Download',
            'cmdduplicate': 'Dupliker',
            'cmdedit': 'Rediger Fil',
            'cmdextract': 'Udpak filer fra arkiv',
            'cmdforward': 'Frem',
            'cmdgetfile': 'Vælg filer',
            'cmdhelp': 'Om dette produkt',
            'cmdhome': 'Hjem',
            'cmdinfo': 'Information',
            'cmdmkdir': 'Ny mappe',
            'cmdmkfile': 'Ny tekst fil',
            'cmdopen': 'Åben',
            'cmdpaste': 'Indsæt',
            'cmdquicklook': 'Vis',
            'cmdreload': 'Reload',
            'cmdrename': 'Omdøb',
            'cmdrm': 'Slet',
            'cmdsearch': 'Find filer',
            'cmdup': 'Gå til forældre mappe',
            'cmdupload': 'Upload filer',
            'cmdview': 'Vis',
            'cmdresize': 'Ændre størrelse',
            'cmdsort': 'Sorter',
            'cmdnetmount': 'Mount network volume',

            /*********************************** buttons ***********************************/
            'btnClose': 'Luk',
            'btnSave': 'Gem',
            'btnRm': 'Slet',
            'btnApply': 'Anvend',
            'btnCancel': 'Annuler',
            'btnNo': 'Nej',
            'btnYes': 'Ja',
            'btnMount': 'Mount',

            /******************************** notifications ********************************/
            'ntfopen': 'Åben mappe',
            'ntffile': 'Åben fil',
            'ntfreload': 'Reload mappe indhold',
            'ntfmkdir': 'Opretter mappe',
            'ntfmkfile': 'Opretter filer',
            'ntfrm': 'Sletter filer',
            'ntfcopy': 'Kopier filer',
            'ntfmove': 'Flytter filer',
            'ntfprepare': 'Forbereder kopering af filer',
            'ntfrename': 'Omdøb filer',
            'ntfupload': 'Uploader filer',
            'ntfdownload': 'Downloader filer',
            'ntfsave': 'Gemmer filer',
            'ntfarchive': 'Opretter arkiv',
            'ntfextract': 'Udpakker filer fra arkiv',
            'ntfsearch': 'Søger filer',
            'ntfresize': 'Resizing images',
            'ntfsmth': 'Gør noget >_<',
            'ntfloadimg': 'Loader billede',
            'ntfnetmount': 'Montere netværks volume', // added 18.04.2012
            'ntfdim': 'Acquiring image dimension',

            /************************************ dates **********************************/
            'dateUnknown': 'Ukendt',
            'Today': 'I dag',
            'Yesterday': 'I går',
            'msJan': 'Jan',
            'msFeb': 'Feb',
            'msMar': 'Mar',
            'msApr': 'Apr',
            'msMay': 'Maj',
            'msJun': 'Jun',
            'msJul': 'Jul',
            'msAug': 'Aug',
            'msSep': 'Sep',
            'msOct': 'Okt',
            'msNov': 'Nov',
            'msDec': 'Dec',
            'January': 'Januar',
            'February': 'Februar',
            'March': 'Marts',
            'April': 'April',
            'May': 'Maj',
            'June': 'Juni',
            'July': 'Juli',
            'August': 'August',
            'September': 'September',
            'October': 'Oktober',
            'November': 'November',
            'December': 'December',
            'Sunday': 'Søndag',
            'Monday': 'Mandag',
            'Tuesday': 'Tirsdag',
            'Wednesday': 'Onsdag',
            'Thursday': 'Torsdag',
            'Friday': 'Fredag',
            'Saturday': 'Lørdag',
            'Sun': 'Søn',
            'Mon': 'Man',
            'Tue': 'Tir',
            'Wed': 'Ons',
            'Thu': 'Tor',
            'Fri': 'Fre',
            'Sat': 'Lør',

            /******************************** sort variants ********************************/
            'sortname': 'efter navn',
            'sortkind': 'efter type',
            'sortsize': 'efter størrelse',
            'sortdate': 'efter dato',
            'sortFoldersFirst': 'Mapper først', // added 22.06.2012

            /********************************** messages **********************************/
            'confirmReq': 'Bekræftelse påkrævet',
            'confirmRm': 'Er du sikker på du vil slette valgte filer?<br/>Dette kan ikke blive fortrudt!',
            'confirmRepl': 'Erstat gammel fil med ny fil?',
            'apllyAll': 'Anvend ved alle',
            'name': 'Navn',
            'size': 'Størrelse',
            'perms': 'Rettigheder',
            'modify': 'Ændret',
            'kind': 'Type',
            'read': 'Læse',
            'write': 'Skrive',
            'noaccess': 'ingen adgang',
            'and': 'og',
            'unknown': 'ukendt',
            'selectall': 'Vælg alle filer',
            'selectfiles': 'Vælg fil(er)',
            'selectffile': 'Vælg første fil',
            'selectlfile': 'Vælg sidste fil',
            'viewlist': 'Liste visning',
            'viewicons': 'Ikon visning',
            'places': 'Plaseringer',
            'calc': 'Udregn',
            'path': 'Sti',
            'aliasfor': 'Alias for',
            'locked': 'Låst',
            'dim': 'Størrelser',
            'files': 'Filer',
            'folders': 'Mapper',
            'items': 'Varer',
            'yes': 'ja',
            'no': 'nej',
            'link': 'Link',
            'searcresult': 'Søge resultater',
            'selected': 'valgte varer',
            'about': 'Om',
            'shortcuts': 'Genveje',
            'help': 'Hjælp',
            'webfm': 'Internet fil manager',
            'ver': 'Version',
            'protocolver': 'protocol version',
            'homepage': 'Projeckt side',
            'docs': 'Dokumentation',
            'github': 'Fork os på Github',
            'twitter': 'Følg os på twitter',
            'facebook': 'Følg os på facebook',
            'team': 'Hold',
            'chiefdev': 'hovede udvikler',
            'developer': 'udvikler',
            'contributor': 'bidragyder',
            'maintainer': 'vedligeholder',
            'translator': 'oversætter',
            'icons': 'Ikoner',
            'dontforget': 'og glemt ikke at tag dit håndklæde',
            'shortcutsof': 'Gemveje deaktiveret',
            'dropFiles': 'Drop filer hertil',
            'or': 'eller',
            'selectForUpload': 'Vælg filer at uploade',
            'moveFiles': 'Flyt filer',
            'copyFiles': 'Kopier filer',
            'rmFromPlaces': 'Slet fra placering',
            'aspectRatio': 'Skærmformat',
            'scale': 'Skala',
            'width': 'Bredte',
            'height': 'Højde',
            'resize': 'Ændre størrelse',
            'crop': 'Beskær',
            'rotate': 'Roter',
            'rotate-cw': 'Roter 90 grader med uret',
            'rotate-ccw': 'Roter 90 grader imod uret',
            'degree': 'Grader',
            'netMountDialogTitle': 'Monter netwærks volume', // added 18.04.2012
            'protocol': 'Protokol', // added 18.04.2012
            'host': 'Host', // added 18.04.2012
            'port': 'Port', // added 18.04.2012
            'user': 'Bruger', // added 18.04.2012
            'pass': 'Kodeord', // added 18.04.2012

            /********************************** mimetypes **********************************/
            'kindUnknown': 'Ukendt',
            'kindFolder': 'Mappe',
            'kindAlias': 'Alias',
            'kindAliasBroken': 'Ødelagt alias',
            // applications
            'kindApp': 'Applikation',
            'kindPostscript': 'Postscript dokument',
            'kindMsOffice': 'Microsoft Office dokument',
            'kindMsWord': 'Microsoft Word dokument',
            'kindMsExcel': 'Microsoft Excel dokument',
            'kindMsPP': 'Microsoft Powerpoint præsentation',
            'kindOO': 'Open Office dokument',
            'kindAppFlash': 'Flash applikation',
            'kindPDF': 'Flytbart Dokument Format (PDF)',
            'kindTorrent': 'Bittorrent fil',
            'kind7z': '7z arkiv',
            'kindTAR': 'TAR arkiv',
            'kindGZIP': 'GZIP arkiv',
            'kindBZIP': 'BZIP arkiv',
            'kindXZ': 'XZ arkiv',
            'kindZIP': 'ZIP arkiv',
            'kindRAR': 'RAR arkiv',
            'kindJAR': 'Java JAR fil',
            'kindTTF': 'True Type skrift',
            'kindOTF': 'Open Type skrift',
            'kindRPM': 'RPM pakke',
            // texts
            'kindText': 'Tekst dokument',
            'kindTextPlain': 'Ren tekst',
            'kindPHP': 'PHP kode',
            'kindCSS': 'Cascading style sheet',
            'kindHTML': 'HTML document',
            'kindJS': 'Javascript kode',
            'kindRTF': 'Rich Tekst Format',
            'kindC': 'C kode',
            'kindCHeader': 'C header kode',
            'kindCPP': 'C++ kode',
            'kindCPPHeader': 'C++ header kode',
            'kindShell': 'Unix shell script',
            'kindPython': 'Python kode',
            'kindJava': 'Java kode',
            'kindRuby': 'Ruby kode',
            'kindPerl': 'Perl script',
            'kindSQL': 'SQL kode',
            'kindXML': 'XML dokument',
            'kindAWK': 'AWK kode',
            'kindCSV': 'Komma seperaret værdier',
            'kindDOCBOOK': 'Docbook XML dokument',
            // images
            'kindImage': 'Billede',
            'kindBMP': 'BMP billede',
            'kindJPEG': 'JPEG billede',
            'kindGIF': 'GIF billede',
            'kindPNG': 'PNG billede',
            'kindTIFF': 'TIFF billede',
            'kindTGA': 'TGA billede',
            'kindPSD': 'Adobe Photoshop billede',
            'kindXBITMAP': 'X bitmap billede',
            'kindPXM': 'Pixelmator billede',
            // media
            'kindAudio': 'Lyd medie',
            'kindAudioMPEG': 'MPEG lyd',
            'kindAudioMPEG4': 'MPEG-4 lyd',
            'kindAudioMIDI': 'MIDI lyd',
            'kindAudioOGG': 'Ogg Vorbis lyd',
            'kindAudioWAV': 'WAV lyd',
            'AudioPlaylist': 'MP3 spilleliste',
            'kindVideo': 'Video medie',
            'kindVideoDV': 'DV video',
            'kindVideoMPEG': 'MPEG video',
            'kindVideoMPEG4': 'MPEG-4 video',
            'kindVideoAVI': 'AVI video',
            'kindVideoMOV': 'Hurtig tids video',
            'kindVideoWM': 'Windows Medie video',
            'kindVideoFlash': 'Flash video',
            'kindVideoMKV': 'Matroska video',
            'kindVideoOGG': 'Ogg video'
        }
    };
}));
