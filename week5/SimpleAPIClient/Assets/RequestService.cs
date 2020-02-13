using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.Networking;
using System.Text;
using System;



public class RequestService : MonoBehaviour
{



    // Start is called before the first frame update
    void Start()
    {
        StartCoroutine(PostUnityWebRequest());
  

    }

  IEnumerator PostUnityWebRequest()
	{

		var jsonString = "{\"score\":3,\"name\":\"montri\"}";
		byte[] byteData = System.Text.Encoding.ASCII.GetBytes(jsonString.ToCharArray());

		UnityWebRequest unityWebRequest = new UnityWebRequest ("http://localhost:8080/player/register", "POST");
		unityWebRequest.uploadHandler = new UploadHandlerRaw (byteData);
		unityWebRequest.SetRequestHeader ("Content-Type", "application/json");
		yield return unityWebRequest.Send();

		if(unityWebRequest.isNetworkError || unityWebRequest.isHttpError) {
			Debug.Log(unityWebRequest.error);
		}
		else {
			Debug.Log("Form upload complete! Status Code: " + unityWebRequest.responseCode);
		}
	}


    // Update is called once per frame
    void Update()
    {
        
    }

    
}