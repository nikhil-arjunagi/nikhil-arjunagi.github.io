﻿narrativeJson(
[{
    "version": 1.0,
    "defaultScreenplayId": "SCP1",
    "screenplayProviderId": "MicrosoftResearch.Rin.DefaultScreenPlayInterpreter",
    "data": {
        "narrativeData": {
            "title": "Image Experience Test",
            "aspectRatio": "WideScreen",
            "estimatedDuration": 30,
            "description": "Description",
        }
    },
    "providers": {
        "ImageProvider": {
            "name": "MicrosoftResearch.Rin.SampleImageExperienceStream",
            "version": 0.0
        },
        "FadeInOutTransitionService": {
            "name": "MicrosoftResearch.Rin.FadeInOutTransitionService",
            "version": 0.0
        },
        "MicrosoftResearch.Rin.DefaultScreenPlayInterpreter": {
            "name": "MicrosoftResearch.Rin.DefaultScreenPlayInterpreter",
            "version": 0.0
        }
    },
    "resources": {
        "LenaImageResource": {
            "uriReference": "Media/lena.png"
        }
    },
    "experiences": {
        "ImageExperience": {
            "providerId": "ImageProvider",
            "data": {
                "transition": {
                    "providerId": "FadeInOutTransitionService",
                    "inDuration": 0.5,
                    "outDuration": 0.5
                }
            },
            "resourceReferences": [
                {
                    "resourceId": "LenaImageResource",
                    "required": true
                }
            ],
            "experienceStreams": {
                "defaultStream": {
                    "duration": 30,
                    "keyframes": [
                        {
                            "offset": 0,
                            "holdDuration": 0,
                            "state": {
                                "viewport": {
                                    "region": {
                                        "center": {
                                            "x": 50,
                                            "y": 50
                                        },
                                        "span": {
                                            "x": 100,
                                            "y": 100
                                        }
                                    },
                                    "rotation": 90
                                }
                            }
                        },
                        {
                            "offset": 2,
                            "holdDuration": 0,
                            "state": {
                                "viewport": {
                                    "region": {
                                        "center": {
                                            "x": 50,
                                            "y": 50
                                        },
                                        "span": {
                                            "x": 38,
                                            "y": 38
                                        }
                                    },
                                    "rotation": 90
                                }
                            }
                        },
                        {
                            "offset": 6,
                            "holdDuration": 0,
                            "state": {
                                "viewport": {
                                    "region": {
                                        "center": {
                                            "x": 50,
                                            "y": 50
                                        },
                                        "span": {
                                            "x": 60,
                                            "y": 60
                                        }
                                    },
                                    "rotation": 180
                                }
                            }
                        },
                        {
                            "offset": 10,
                            "holdDuration": 0,
                            "state": {
                                "viewport": {
                                    "region": {
                                        "center": {
                                            "x": 80,
                                            "y": 80
                                        },
                                        "span": {
                                            "x": 25,
                                            "y": 25
                                        }
                                    },
                                    "rotation": 270
                                }
                            }
                        }
                    ]
                }
            }
        }
    },
    "screenplays": {
        "SCP1": {
            "data": {
                "experienceStreamReferences": [
                    {
                        "experienceId": "ImageExperience",
                        "experienceStreamId": "defaultStream",
                        "begin": 0,
                        "duration": 30,
                        "layer": "foreground",
                        "dominantMedia": "visual",
                        "volume": 1
                    }
                ]
            }
        }
    }
}]);