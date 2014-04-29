narrativeJson(
[{
    "version": 1.0,
    "defaultScreenplayId": "SCP1",
    "screenplayProviderId": "MicrosoftResearch.Rin.DefaultScreenPlayInterpreter",
    "data": {
        "narrativeData": {
            "aspectRatio": 1,
            "estimatedDuration": 114,
            "description": "Description",
        }
    },
    "providers": {
        "MicrosoftResearch.Rin.DefaultScreenPlayInterpreter": {
            "name": "MicrosoftResearch.Rin.DefaultScreenPlayInterpreter",
            "version": 0.0
        },
        "LabelExperienceProvider": {
            "name": "LabelExperienceProvider",
            "version": 0.0
        },
        "MicrosoftResearch.Rin.VideoExperienceStream": {
            "name": "MicrosoftResearch.Rin.VideoExperienceStream",
            "version": 0.0
        },
        "SideBarExperienceProvider": {
            "name": "SideBarExperienceProvider",
            "version": 0.0
        },
        "MicrosoftResearch.Rin.FadeInOutTransitionService": {
            "name": "MicrosoftResearch.Rin.FadeInOutTransitionService",
            "version": 0.0
        }
    },
    "resources": {
        "R-1": {
            "uriReference": "http://wdh.blob.core.windows.net/mptourism/intro/media/Bandhavgarh/Videos/MP.mp4"
        },
        "R-2-SideBar": {
            "uriReference": "BandhavgarhSideBar.js"
        },
        "R-3-SideBar": {
            "uriReference": "JahazMahalSideBar.js"
        },
        "R-4-SideBar": {
            "uriReference": "SanchiStupaSideBar.js"
        },
        "R-5-SideBar": {
            "uriReference": "OrchchaSideBar.js"
        },
        "R-1-MediaCollection": {
            "uriReference": "BandhavgarhMediaCollection.js"
        },
        "R-Icon-Bandhavgarh": {
            "uriReference": "http://wdh.blob.core.windows.net/mptourism/intro/media/Bandhavgarh/Images/TigerLineRS.png"
        },
        "R-Icon-KhajurahoMapImg": {
            "uriReference": "http://wdh.blob.core.windows.net/mptourism/intro/media/Khajuraho/Images/KhajurahoMapImg.png"
        }
    },
    "experiences": {
        "MainVideoExperienceStream": {
            "providerId": "MicrosoftResearch.Rin.VideoExperienceStream",
            "data": {
                "transition": {
                    "providerId": "MicrosoftResearch.Rin.FadeInOutTransitionService",
                    "inDuration": 2,
                    "outDuration": 2
                },
                "markers": {
                    "beginAt": 0,
                    "endAt": 90
                }
            },
            "resourceReferences": [
				{
				    "resourceId": "R-1",
				    "required": true
				}
            ],
            "experienceStreams": {
                "defaultStream": {
                    "duration": 90
                }
            }
        },
        "BandhavgarhSideBar": {
            "providerId": "SideBarExperienceProvider",
            "triggeringId": "CheetahHoliLabelId",
            "resourceReferences": [
				{
				    "resourceId": "R-2-SideBar",
				    "required": true
				}
            ],
            "experienceStreams": {
                "SideBarStream": {
                    "duration": 90
                }
            }
        },
        "JahazMahalSideBar": {
            "providerId": "SideBarExperienceProvider",
            "triggeringId": "JahazMahalLabelId",
            "resourceReferences": [
				{
				    "resourceId": "R-3-SideBar",
				    "required": true
				}
            ],
            "experienceStreams": {
                "SideBarStream": {
                    "duration": 90
                }
            }
        },
        "SanchiStupaSideBar": {
            "providerId": "SideBarExperienceProvider",
            "triggeringId": "SanchiStupaLabelId",
            "resourceReferences": [
				{
				    "resourceId": "R-4-SideBar",
				    "required": true
				}
            ],
            "experienceStreams": {
                "SideBarStream": {
                    "duration": 90
                }
            }
        },
        "OrchchaSideBar": {
            "providerId": "SideBarExperienceProvider",
            "triggeringId": "OrchchaLabelId",
            "resourceReferences": [
				{
				    "resourceId": "R-5-SideBar",
				    "required": true
				}
            ],
            "experienceStreams": {
                "SideBarStream": {
                    "duration": 90
                }
            }
        },
        "CheetahHoliLabel": {
            "providerId": "LabelExperienceProvider",
            "data": {
                "transition": {
                    "providerId": "MicrosoftResearch.Rin.FadeInOutTransitionService",
                    "inDuration": 3.5,
                    "outDuration": 2
                },
                "labelId": "CheetahHoliLabelId",
                "placement": {
                    "x": "50%",
                    "y": "36.5%"
                },
                "icon": "R-Icon-Bandhavgarh"
            },
            "experienceStreams": {
                "CheetahHoliLabelStream": {
                    "duration": 30
                }
            }
        },
        "JahazMahalLabel": {
            "providerId": "LabelExperienceProvider",
            "data": {
                "labelId": "JahazMahalLabelId",
                "placement": {
                    "x": "46%",
                    "y": "33%"
                },
                "clickAction": {
                    "defaultInteractionBehavior": "rin.interactionBehaviors.popup",
                    "data": {
                        "srcType": "MicrosoftResearch.Rin.RinExperienceStream",
                        "src": "intro/NeemranaPS.js",
                        "largeMediaDuration": 20
                    }
                }
            },
            "experienceStreams": {
                "JahazMahalLabelStream": {
                    "duration": 30
                }
            }
        },
        "KhajurahoLabel": {
            "providerId": "LabelExperienceProvider",
            "data": {
                "labelId": "KhajurahoLabelId",
                "placement": {
                    "x": "28%",
                    "y": "20%"
                },
                "icon": "R-Icon-KhajurahoMapImg",
                "clickAction": {
                    "defaultInteractionBehavior": "rin.interactionBehaviors.popup",
                    "data": {
                        "srcType": "MicrosoftResearch.Rin.RinExperienceStream",
                        "src": "intro/KhajurahoMapRin.js",
                        "largeMediaDuration": 10
                    }
                }
            },
            "experienceStreams": {
                "KhajurahoLabelStream": {
                    "duration": 20
                }
            }
        },
        "SanchiStupaLabel": {
            "providerId": "LabelExperienceProvider",
            "data": {
                "labelId": "SanchiStupaLabelId",
                "placement": {
                    "x": "55%",
                    "y": "40%"
                }
            },
            "experienceStreams": {
                "SanchiStupaLabelStream": {
                    "duration": 30
                }
            }
        },
        "OrchchaLabel": {
            "providerId": "LabelExperienceProvider",
            "data": {
                "labelId": "OrchchaLabelId",
                "placement": {
                    "x": "60%",
                    "y": "26.5%"
                }
            },
            "experienceStreams": {
                "OrchchaLabelStream": {
                    "duration": 30
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
            "data": {
                "defaultInteractionBehavior": "rin.interactionBehaviors.seekToScreenplayOffset",
                "seekTime": 20,
                "screenplay": "SCP1"
            },
            "resourceReferences": [
                {
                    "resourceId": "R-1-MediaCollection",
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
					    "experienceId": "MainVideoExperienceStream",
					    "experienceStreamId": "defaultStream",
					    "begin": 0,
					    "duration": 90,
					    "layer": "foreground",
					    "dominantMedia": "visual",
					    "volume": 1
					},
                    {
                        "experienceId": "CheetahHoliLabel",
                        "experienceStreamId": "CheetahHoliLabelStream",
                        "begin": 23,
                        "duration": 5.0,
                        "layer": "foreground",
                        "dominantMedia": "visual",
                        "volume": 1
                    },
                    {
                        "experienceId": "KhajurahoLabel",
                        "experienceStreamId": "KhajurahoLabelStream",
                        "begin": 36,
                        "duration": 6.5,
                        "layer": "foreground",
                        "dominantMedia": "visual",
                        "volume": 1
                    },
                    {
                        "experienceId": "JahazMahalLabel",
                        "experienceStreamId": "JahazMahalLabelStream",
                        "begin": 50,
                        "duration": 8,
                        "layer": "foreground",
                        "dominantMedia": "visual",
                        "volume": 1
                    },
                    {
                        "experienceId": "SanchiStupaLabel",
                        "experienceStreamId": "SanchiStupaLabelStream",
                        "begin": 61,
                        "duration": 6.5,
                        "layer": "foreground",
                        "dominantMedia": "visual",
                        "volume": 1
                    },
                    {
                        "experienceId": "OrchchaLabel",
                        "experienceStreamId": "OrchchaLabelStream",
                        "begin": 76.5,
                        "duration": 7.5,
                        "layer": "foreground",
                        "dominantMedia": "visual",
                        "volume": 1
                    },
                    {
                        "experienceId": "BandhavgarhSideBar",
                        "experienceStreamId": "SideBarStream",
                        "begin": 23,
                        "duration": 5,
                        "layer": "foreground",
                        "dominantMedia": "visual",
                        "volume": 1
                    },
                    {
                        "experienceId": "JahazMahalSideBar",
                        "experienceStreamId": "SideBarStream",
                        "begin": 50,
                        "duration": 5,
                        "layer": "foreground",
                        "dominantMedia": "visual",
                        "volume": 1
                    },
                    {
                        "experienceId": "SanchiStupaSideBar",
                        "experienceStreamId": "SideBarStream",
                        "begin": 61,
                        "duration": 5,
                        "layer": "foreground",
                        "dominantMedia": "visual",
                        "volume": 1
                    },
                    {
                        "experienceId": "OrchchaSideBar",
                        "experienceStreamId": "SideBarStream",
                        "begin": 77,
                        "duration": 5,
                        "layer": "foreground",
                        "dominantMedia": "visual",
                        "volume": 1
                    },
                    {
                        "experienceId": "MetroOneDTemplateES-1",
                        "experienceStreamId": "defaultStream",
                        "begin": 90,
                        "duration": 20,
                        "layer": "foreground",
                        "dominantMedia": "visual",
                        "volume": 0.6
                    }
                ]
            }
        }
    }
}]);