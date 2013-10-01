<?
    ini_set('display_errors',1);
    ini_set('display_startup_errors',1);
    error_reporting(-1);
    $file = "api/ScriptPCH.js";
    
    $cwd = ".";
    
    function IncludeFile($matches)
    {
        global $cwd;
        return Compile($cwd . "/" . $matches[1]);
    }
    
    function Compile($file)
    {
        global $cwd;
        
        if (!file_exists($file))
            exit("Error: Failed to include file " . $file);
        
        $cwd = dirname($file);
        $source = file_get_contents($file);
        
        print preg_replace_callback("/#include (.+)/i", "IncludeFile", $source);
    }
    
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/javascript');
    print Compile($file);
    
?>