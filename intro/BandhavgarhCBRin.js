[{
    "version": 1.0,
    "defaultScreenplayId": "SCP1",
    "data": {
        "narrativeData": {
            "guid": "9E964502-37F2-4996-A0D2-DC575DB77A10",
            "timestamp": "2011-01-08T04:35:05.348278Z",
            "title": "Bandhavgarh Media Collection",
            "author": "Nikhil",
            "aspectRatio": "WideScreen",
            "estimatedDuration": 98,
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
        "microsoftResearch.rin.twodlayoutengine": {
            "name": "microsoftResearch.rin.twodlayoutengine",
            "version": 0.0
        }
    },
    "resources": {
        "R-1": {
            "uriReference": "BandhavgarhMediaCollection.js"
        },
        "R-1-KhajurahoMapImgOverlayData": {
            "uriReference": "KhajurahoMapImgOverlayData.js"
        },
        "R-1-KhajurahoMapImg": {
            "uriReference": "http://wdh.blob.core.windows.net/mptourism/intro/media/Khajuraho/Images/KhajurahoMapImg.png"
        }
    },
    "experiences": {
        "KhajurahoMapImgES": {
            "providerId": "microsoftResearch.rin.twodlayoutengine",
            "data": {
                "contentType": "ZoomableImage"
                
            },
            "resourceReferences": [
                {
                    "resourceId": "R-1-KhajurahoMapImgOverlayData",
                    "required": true
                },
                {
                    "resourceId": "R-1-KhajurahoMapImg",
                    "required": true
                }
            ],
            "experienceStreams": {
                "defaultSequence": {
                    "duration": 9.7999999999999989,
                    "keyframes": [
                        {
                            "offset": 0,
                            "holdDuration": 0.19999999999999998,
                            "data": {
                                "ea-selstate": {
                                    "item": {
                                        "itemid": "xyz"
                                    }
                                }
                            }
                        },
                        {
                            "offset": 9.4,
                            "holdDuration": 0.19999999999999998,
                            "data": {
                                "ea-selstate": null
                            }
                        }
                    ]
                }
            }
        },
        "MetroOneDTemplateES-1": {
            "providerId": "MicrosoftResearch.Rin.RinTemplates.MetroOneDTemplateES",
            "header": {
                "defaultKeyframeSequence": "defaultSequence",
                "provider": {
                    "name": "MicrosoftResearch.Rin.RinTemplates.MetroOneDTemplateES",
                    "version": "0.0"
                }
            },
            "data": {},
            "resourceReferences": [
                {
                    "resourceId": "R-1",
                    "required": true
                }
            ],
            "experienceStreams": {
                "defaultStream": {
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
                        "experienceId": "KhajurahoMapImgES",
                        "experienceStreamId": "defaultSequence",
                        "begin": 0,
                        "duration": 500,
                        "layer": "overlay",
                        "dominantMedia": "visual",
                        "volume": 1
                    },
                    {
                        "experienceId": "MetroOneDTemplateES-1",
                        "experienceStreamId": "defaultStream",
                        "begin": 900,
                        "duration": 2000,
                        "layer": "foreground",
                        "dominantMedia": "visual",
                        "volume": 0.6
                    }
                ]
            }
        }
    }
}]