[{
    "version": 1.0,
    "defaultScreenplayId": "SCP1",
    "data": {
        "narrativeData": {
            "guid": "9E964502-37F2-4996-A0D2-DC575DB77A10",
            "timestamp": "2011-01-08T04:35:05.348278Z",
            "title": "Photosynth",
            "author": "Nikhil",
            "aspectRatio": "WideScreen",
            "estimatedDuration": 20,
            "description": "Description",
            "branding": null
        }
    },
    "providers": {
        "FadeInOutTransitionService": {
            "name": "MicrosoftResearch.Rin.FadeInOutTransitionService",
            "version": 0.0
        },
        "MicrosoftResearch.Rin.DefaultScreenPlayInterpreter": {
            "name": "MicrosoftResearch.Rin.DefaultScreenPlayInterpreter",
            "version": 0.0
        },
        "MicrosoftResearch.Rin.PanoramicExperienceStream": {
            "name": "MicrosoftResearch.Rin.PanoramicExperienceStream",
            "version": 0.0
        },
        "MicrosoftResearch.Rin.WebViewExperienceStream": {
            "name": "MicrosoftResearch.Rin.WebViewExperienceStream",
            "version": 0.0
        }
    },
    "resources": {
        "R-Neemrana-PS": {
            "uriReference": "http://cdn2.ps1.photosynth.net/pano/c01001200-AAUhybgADS8/0.json"
        },
        "R-Webview-Src": {
            "uriReference": "http://en.wikipedia.org/wiki/Kanha_National_Park"
        }
    },
    "experiences": {
        "PhotosynthES-Neemrana": {
            "providerId": "MicrosoftResearch.Rin.PanoramicExperienceStream",
            "data": {
                "transition": {
                    "providerId": "MicrosoftResearch.Rin.FadeInOutTransitionService",
                    "inDuration": 2,
                    "outDuration": 2
                }
            },
            "resourceReferences": [
                {
                    "resourceId": "R-Neemrana-PS",
                    "required": true
                }
            ],
            "experienceStreams": {
                "defaultSequence": {
                    "duration": 20
                }
            }
        },
        "WebViewES": {
            "providerId": "MicrosoftResearch.Rin.WebViewExperienceStream",
            "data": {
                "transition": {
                    "providerId": "MicrosoftResearch.Rin.FadeInOutTransitionService",
                    "inDuration": 2,
                    "outDuration": 2
                }
            },
            "resourceReferences": [
                {
                    "resourceId": "R-Webview-Src",
                    "required": true
                }
            ],
            "experienceStreams": {
                "defaultSequence": {
                    "duration": 20
                }
            }
        }
    },
    "screenplays": {
        "SCP1": {
            "data": {
                "experienceStreamReferences": [
                    {
                        "experienceId": "WebViewES",
                        "experienceStreamId": "defaultSequence",
                        "begin": 0,
                        "duration": 20,
                        "layer": "foreground",
                        "dominantMedia": "visual",
                        "volume": 1
                    },
                    {
                        "experienceId": "PhotosynthES-Neemrana",
                        "experienceStreamId": "defaultSequence",
                        "begin": 0,
                        "duration": 20,
                        "layer": "foreground",
                        "dominantMedia": "visual",
                        "volume": 1
                    }
                ]
            }
        }
    }
}]