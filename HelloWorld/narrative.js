narrativeJson(
    [{
        "version": "1.0",
        "defaultScreenplayId": "SCP1",
        "data": {
            "narrativeData": {
                "guid": "e3ced195-0c8b-48f6-b42c-f989e52b4f03",
                "title": "Hello World!",
                "author": "Rin sample",
                "aspectRatio": "WideScreen",
                "estimatedDuration": 20,
                "description": "The quintessential Hello World!"
            }
        },
        "providers": {
            "HelloWorldExperienceProvider": {
                "name": "HelloWorldExperienceProvider",
                "version": "1.0"
            },
            "screenplayProvider": {
                "name": "MicrosoftResearch.Rin.DefaultScreenplayProvider",
                "version": "1.0"
            }
        },
        "resources": {
        },
        "experiences": {
            "HelloWorldExperienceStream": {
                "providerId": "HelloWorldExperienceProvider",
                "data": {
                    "transition": {
                        "providerId": "MicrosoftResearch.Rin.FadeInOutTransitionService",
                        "inDuration": 2,
                        "outDuration": 2
                    },
                    "markers": {
                        "beginAt": 0,
                        "endAt": 20
                    }
                },
                "resourceReferences": [
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
                            "experienceId": "HelloWorldExperienceStream",
                            "experienceStreamId": "defaultStream",
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
    );